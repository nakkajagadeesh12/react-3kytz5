import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Home';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Cart from './Cart';
import Login from './Login';
import Signup from './Signup';
import OrderDetails from './OrderDetails';


const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/details" component={OrderDetails}/>
      </BrowserRouter>
    </div>
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
