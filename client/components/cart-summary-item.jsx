import React from 'react';

export default function CartSummaryItem(props) {
  const price = props.item.price;

  return (
    <>
      <div className= "cartSummaryItemContainer d-flex justify-content-between">
        <div className="cartItemsimage col-2">
          <img className="cartItemsimage" src={props.item.image} alt="cart image" />
        </div>
        <div className="cartItemsname col-3">
          {props.item.name}
        </div>
        <div className="cartdetailsContainer col-5">
          <div className="cartItemsprice">
            Price : ${(price / 100).toFixed(2)}
          </div>
          <div className="cartItemsdescription">
            {props.item.description}
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </>
  );
}
