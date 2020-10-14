import React from 'react';

export default function CartSummaryItem(props) {
  const totalPrice = props.item.price;

  return (
    <>
      <div className = "cartSummaryItemContainer">
        <div className="image">
          <img src={props.item.image} alt="cart image" />
        </div>
        <div className="name">
          {props.item.name}
        </div>
        <div>
          {totalPrice}
        </div>
        <div className="description">
          {props.item.description}
        </div>
      </div>
    </>
  );
}
