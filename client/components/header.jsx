import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <header className ="header">
        <div className="header-contents">
          <div className="row justify-content-center">
            <h6 className="col-1 logoText">BestTeas</h6>
            <h6 className="col-1">About us</h6>
            <h6 className="col-1">Menu</h6>
            <h6 className="col-1">Order</h6>
            <h6 className="col-1">Locations</h6>
            <h6 className="col-1">Career</h6>
            <h6 className="col-2" onClick={() => this.props.view('cart', {})}><i className="fas fa-shopping-cart"></i> <span>{this.props.cartItemCount}</span>
            </h6>
          </div>
        </div>
      </header>
    );
  }
}
