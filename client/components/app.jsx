import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: {
          productId: params
        }
      }
    });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cart: data
        });
      });
  }

  render() {
    const viewType = this.state.view.name;
    if (viewType === 'catalog') {
      return (
        <div>
          <Header cartItemCount = {this.state.cart.length} />
          <ProductList setView = {this.setView}/>
        </div>
      );
    } else if (viewType === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} />
          <ProductDetails
            view = {this.setView}
            viewParams = {this.state.view.params}
          />
        </div>
      );
    }
  }

}
