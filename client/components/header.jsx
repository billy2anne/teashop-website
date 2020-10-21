import React from 'react';

export default function Header(props) {
  return (
    <header className ="header">
      <div className="header-contents">
        <div className="row justify-content-center">
          <h6 className="col-1 logoText">BestTeas</h6>
          <h6 className="col-1" onClick={() => props.view('aboutUs', {})}>About us</h6>
          <h6 className="col-1" onClick={() => props.view('catalog', {})}>Menu</h6>
          <h6 className="col-1" onClick={() => props.view('checkout', {})}>Order</h6>
          <h6 className="col-1" onClick={() => props.view('locations', {})}>Locations</h6>
          <h6 className="col-1">Career</h6>
          <h6 className="col-2" onClick={() => props.view('cart', {})}><i className="fas fa-shopping-cart"> View Cart: </i> <span>{props.cartItemCount} items</span>
          </h6>
        </div>
      </div>
    </header>
  );
}
