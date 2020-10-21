require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const teas = `
    select "teaId",
           "name",
           "price",
           "image",
           "description"
    from "products"
  `;
  db.query(teas)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:teaId', (req, res, next) => {
  if (req.params.teaId <= 0) {
    return res.status(400).json({
      error: 'teaId entered is invalid.'
    });
  } else {
    db.query(`
      select *
      from   "products"
      where  "teaId" = $1;
    `, [req.params.teaId])
      .then(result => {
        if (!result.rows[0]) {
          return res.status(404).json({
            error: `teaId: ${req.params.teaId} is not found.`
          });
        } else {
          res.json(result.rows[0]);
        }
      }).catch(err => {
        console.error(err);
        next(new ClientError('unexpected error', 500));
      });
  }
});

app.get('/api/cart/', (req, res, next) => {
  const sql = `
  select "c"."cartItemId",
         "c"."price",
         "p"."teaId",
         "p"."image",
         "p"."name",
         "p"."description"
    from "cartItems" as "c"
    join "products"  as "p" using ("teaId")
   where "c"."cartId" = $1
  `;

  if (!req.session.cartId) {
    return res.json([]);
  }

  db.query(sql, [req.session.cartId])
    .then(result => {
      const data = result.rows;
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const { teaId } = req.body;

  if (!Number(teaId)) {
    return next(new ClientError(`${teaId} is not a valid Product ID`, 400));
  }

  const sql = `
  select "price"
  from   "products"
  where  "teaId" = $1
  `;

  db.query(sql, [teaId])
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError('teaId does not exist', 400);
      } else if (req.session.cartId) {
        return {
          price: result.rows[0].price,
          cartId: req.session.cartId
        };
      }
      const sql = `
        insert into "carts" ("cartId", "createdAt")
        values (default, default)
        returning "cartId"
      `;
      return db.query(sql).then(cartId => ({
        price: result.rows[0].price,
        cartId: cartId.rows[0].cartId
      }));
    })
    .then(cartItems => {
      req.session.cartId = cartItems.cartId;
      const price = cartItems.price;
      const sql = `
        insert into "cartItems" ("cartId", "teaId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;

      return db
        .query(sql, [cartItems.cartId, teaId, price])
        .then(cartItemId => cartItemId.rows[0]);
    })
    .then(cartItemId => {
      const sql = `
      select "c"."cartItemId",
        "c"."price",
        "p"."teaId",
        "p"."image",
        "p"."name",
        "p"."description"
      from "cartItems" as "c"
      join "products" as "p" using ("teaId")
      where "c"."cartItemId" = $1
      `;

      return db.query(sql, [cartItemId.cartItemId])
        .then(cartItems => {
          res.status(201).json(cartItems.rows);
        });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {

  const { name, creditCard, shippingAddress } = req.body;
  const { cartId } = req.session;
  if (!cartId) {
    return res.status(400).json(({ error: 'cartId not found' }));
  }
  if (!name || !creditCard || !shippingAddress) {
    return res.status(400).json({ error: 'Please type in address, credit card, and shipping address in the proper fields' });
  }

  const inputOrder = `
    insert into "orders" ("cartId", "name", "creditCard", "shippingAddress")
    values ($1, $2, $3, $4)
    returning "orderId",
              "createdAt",
              "name",
              "creditCard",
              "shippingAddress"
              `;

  const values = [cartId, name, creditCard, shippingAddress];
  db.query(inputOrder, values)
    .then(data => {
      delete req.session.cartId;
      res.status(201).json(data.rows[0]);
    });
});

app.delete('/api/cart/:cartItemId', (req, res, next) => {
  const cartItemId = req.params.cartItemId;
  const sql = `
    delete from "cartItems"
    where "cartItemId" = $1
  `;
  db.query(sql, [cartItemId])
    .then(data => {
      if (data.rowCount === 0) {
        return res.status(400);
      } else {
        return res.status(204).json({ alert: 'Item was successfully deleted' });
      }
    }
    );
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
