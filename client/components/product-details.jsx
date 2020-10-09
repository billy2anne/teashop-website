import React from 'react';

export default class ProductDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.viewParams.productId.productId}`)
      .then(response => response.json())
      .then(data => {
        return this.setState({ product: data });
      });
  }

  setView(e) {
    this.props.view('catalog', {});
  }

  render() {
    if (!this.state.product) {
      return null;
    } else {
      return (
        <>
          <div onClick = {this.setView}>
            &lt;Back to Catalogs
          </div>
          <div className="productDetailsContainer col-12">
            <img src={this.state.product.image} alt="productImage" className="detailsImage col-6"></img>
            <div className="detailsContentContainer col-6">
              <div className="nameProductDetails col-6">{this.state.product.name}</div>
              <div className="price">{this.state.product.price}</div>
              <div className="description">{this.state.product.description}</div>
            </div>
          </div>
          <button>Add to Cart</button>
        </>
      );
    }
  }

}
