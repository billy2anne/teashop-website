import React from 'react';
import CartSummaryItem from './cart-summary-item';
export default function CartSummary(props) {

  let totalPrice = 0;
  for (var i = 0; i < props.cart.length; i++) {
    totalPrice = (props.cart[i].price / 100) + totalPrice;
  }

  if (props.cart.length === 0) {
    return (
      <div>Your cart is empty</div>
    );
  }

  return (
    <>
      <div className="cartSummaryContainer">
        <div onClick={props.view('catalog', {})} className="catalogText">
          &lt;Back to Menu
        </div>
        <h1>Cart Summary</h1>
        {props.cart.map(item =>
          <CartSummaryItem item={item} key={item.teaId}/>
        )}
      </div>
      <div className="totalPrice">Price: ${(totalPrice).toFixed(2)} </div>
    </>
  );

}
