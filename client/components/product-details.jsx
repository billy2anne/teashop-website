import React from 'react';

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.viewParams.productId.productId}`)
      .then(response => response.json())
      .then(data => {
        return this.setState({ product: data });
      });
  }

  addToCart() {
    this.props.addToCart(this.state.product);
  }

  setView(e) {
    this.props.view('catalog', {});
  }

  render() {
    if (!this.state.product) {
      return null;
    } else {
      const price = this.state.product.price / 100;
      return (
        <>
          <div onClick = {this.setView} className="catalogText">
            &lt;Back to Menu
          </div>
          <div className="productDetailsContainer col-10 justify-content-center">
            <img src={this.state.product.image} alt="productImage" className="detailsImage col-3"></img>
            <div className="detailsContentContainer col-5">
              <div className="nameProductDetails">{this.state.product.name}</div>
              <div className="price">${price.toFixed(2)}</div>
              <div className="description">{this.state.product.description}</div>
              <button onClick={this.addToCart}>Add to Cart</button>
            </div>
          </div>
        </>
      );
    }
  }

}
