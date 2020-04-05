import React from "react";
import Header from "./Header";
import List from "./List";
import { Footer } from "./Footer";
import "./Cart.css";

const Cart = props => {
  return (
    <div>
      <Header />
      <List />
      <div className="cart">
        <img
          src={"https://www.inampro.nic.in/writereaddata/images/emptycart2.png"}
        />
      </div>
      {console.log(props.data)}
      <Footer />
    </div>
  );
};

export default Cart;
