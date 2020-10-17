import React from 'react';
import CartSummaryItem from './cart-summary-item';
export default function CartSummary(props) {
// if the cart is empty, show a message that your cart is empty
  if (props.cart.length === 0) {
    return (
      <div className="cartSummaryContainer col-10 align-content-center">
        <div onClick={() => props.view('catalog', {})} className="catalogText">
          &lt;Back to Menu
        </div>
        <div className="emptyCart">Your cart is empty</div>
      </div>
    );
  }
  //  get the total price of each item and track the quantity of each teaId
  let totalPrice = 0;
  var teaObj = {};
  let qty = 1;
  let output = [];
  for (var i = 0; i < props.cart.length; i++) {
    totalPrice += (props.cart[i].price / 100);
    teaObj[props.cart[i].teaId] = qty;
    if (props.cart[i].teaId in teaObj) {
      qty = qty + 1;//
    }
  }
  console.log(teaObj);
  // checks if there is a duplicate of teaItem
  for (const item in teaObj) {
    qty = teaObj[item];
    if (qty > 1) {
      const index = props.cart.indexOf({teaId: item})

      ()

    }
    console.log(props.cart);
    const teaCartItem = (
      <div className="cartSummaryContainer col-10 align-content-center">
        <div onClick={() => props.view('catalog', {})} className="catalogText">
          &lt;Back to Menu
        </div>
        <h4>Cart Summary</h4>
        {props.cart.map(item =>
          <CartSummaryItem item={item} key={item.cartItemId} qty={qty} />
        )}
        <div className="totalPrice col-10 justify-content-center">Total Price: ${(totalPrice).toFixed(2)} </div>
      </div>
    );

    return teaCartItem;

  }
}
