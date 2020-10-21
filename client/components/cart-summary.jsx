import React from 'react';
import CartSummaryItem from './cart-summary-item';
export default function CartSummary(props) {

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

  let totalPrice = 0;
  const qty = 1;
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
        <CartSummaryItem key={item.cartItemId} item={item} id={item.cartItemId} qty={qty}/>
      )}
      <div className="totalPrice col-10 justify-content-center">Total Price: ${(totalPrice).toFixed(2)}
        <br/>
        <button onClick={() => props.view('checkout', {})}>Place Order</button>
      </div>
    </div>
  );
}
