
import React from 'react';
import Header from './Header';
import List from './List';
import {Footer}  from './Footer'

const Cart = (props) => {
  return (
    <div>
      <Header />
      <List />
      <h1>Cart is empty</h1>
      {console.log(props.data)}
      <Footer />
    </div>
  )
}

export default Cart;