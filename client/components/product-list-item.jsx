import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className="card-container col-3" onClick ={props.setViewDetails} id={props.productId}>
      <div className="image">
        <img src={props.product.image} alt="tea image"/>
      </div>
      <div className="name">
        {props.name}
      </div>
      <div className="price">
        ${(props.price / 100).toFixed(2)}
      </div>
      <div className="description">
        {props.description}
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
