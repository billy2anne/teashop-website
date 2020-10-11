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
  const value = [req.session.cartId];
  db.query(sql, value)
    .then(result => {
      const data = result.rows;
      res.status(200).json(data);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  if (!Number(productId)) {
    return res.status.json({ error: 'Grade must be a positive number' });
  }

  const sql = `
    select "price" from "products"
    where "productId" = ${req.body.productId}
  `;

  db.query(sql)
    .then(response => {
      if (response.rows.length === 0) {
        next(new ClientError('Cannot find product', 400));
      }
    });

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
