import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import AboutUs from './about-us';
import Locations from './locations';
import CareerList from './career-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'aboutUs',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
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

  addToCart(tea) {
    fetch('api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tea)
    })
      .then(res => res.json())
      .then(
        data => {
          const cartList = this.state.cart;
          const addItems = [];
          addItems.push(data.[0]);
          this.setState({
            cart: cartList.concat(addItems)
          });
        }
      );
  }

  placeOrder(paymentData) {
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: paymentData.name,
        creditCard: paymentData.creditCard,
        shippingAddress: paymentData.shippingAddress
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cart: []
        });
        this.setView('checkout', {});
      });
  }

  deleteCartItem(cartItemId) {
    fetch(`/api/cart/${cartItemId}`, {
      method: 'DELETE'
    })
      .then(data => {
        this.getCartItems();
      });
  }

  render() {
    const viewType = this.state.view.name;
    if (viewType === 'aboutUs') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <AboutUs view={this.setView} />
        </div>
      );
    }
    if (viewType === 'catalog') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <ProductList setView = {this.setView}/>
        </div>
      );
    } else if (viewType === 'details') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <ProductDetails
            view = {this.setView}
            viewParams = {this.state.view.params}
            addToCart = {this.addToCart}
          />
        </div>
      );
    } else if (viewType === 'cart') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <CartSummary cart={this.state.cart} view={this.setView} delete={this.deleteCartItem}/>
        </div>
      );
    } else if (viewType === 'checkout') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <CheckoutForm placeOrder={this.placeOrder} cart={this.state.cart.length} view={this.setView} />
        </div>
      );
    } else if (viewType === 'locations') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <Locations/>
        </div>
      );
    } else if (viewType === 'career') {
      return (
        <div>
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <CareerList />
        </div>
      );
    }
  }
}
