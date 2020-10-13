import React from 'react';

export default function CartSummaryItem(props) {
  const totalPrice = this.props.item.price;

  return (
    <>
      <div>
        Cart Summary Page
      </div>
      <div>
        {totalPrice}
      </div>
    </>
  );

}
