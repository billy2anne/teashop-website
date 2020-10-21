import React from 'react';

export default function CartSummaryItem(props) {

  debugger;

  const price = props.item.price;

  return (
    <>
      <div className="cartSummaryItemContainer d-flex justify-content-between" id={props.item.cartItemId}>
        <i className="fas fa-times" onClick={() => props.delete(props.item.cartItemId)}></i>
        <div className="cartItemsimage col-2">
          <img className="cartItemsimage" src={props.item.image} alt="cart image" />
        </div>
        <div className="cartItemsname col-3">
          {props.item.name}
        </div>
        <div className="cartdetailsContainer col-5">
          <div className="cartQty">Qty : {props.qty}</div>
          <div className="cartItemsprice">
            <div>Price : $ {(price / 100).toFixed(2)}</div>
          </div>
          <div className="cartItemsdescription">
            Description: {props.item.description}
          </div>
        </div>
      </div>
    </>
  );
}
