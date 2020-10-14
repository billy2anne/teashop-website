import React from 'react';
import CartSummaryItem from './cart-summary-item';
export default function CartSummary(props) {

  if (props.cart.length === 0) {
    return (
      <div>Your cart is empty</div>
    );
  }

  let totalPrice = 0;
  for (var i = 0; i < props.cart.length; i++) {
    totalPrice += (props.cart[i].price / 100);
  }
  return (
    <div className="cartSummaryContainer col-10 align-content-center">
      <div onClick={() => props.view('catalog', {})} className="catalogText">
          &lt;Back to Menu
      </div>
      <h4>Cart Summary</h4>
      {props.cart.map(item =>
        <CartSummaryItem item={item} key={item.teaId}/>
      )}
      <div className="totalPrice col-10 justify-content-center">Total Price: ${(totalPrice).toFixed(2)} </div>
    </div>
  );
}
