import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const addcart = [];
const ItemList = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then((response) => response.json()).then((response) => setData(response))
  }, [])

  const buttonClick = (item) => {
    addcart.push(item);
    setCart(addcart);
  }
  return (
    <div className="item-list">
      {data && data.slice(0, 56).map((item) => {
        const no = Math.floor(Math.random() * 1000);
        item.thumbnailUrl = `https://source.unsplash.com/collection/${no}`;
        return (
          <div className="item-it">
            <div className="it-1">
              <Link to="/details">
                <img src={item.thumbnailUrl} alt="image" />
              </Link>
              <div className="it-3">
                <p>product {item.id}</p>
              </div>
            </div>
            <div className="it-2">
              <div className="class1">
                <button className="btn1" onClick={() => buttonClick(item)}>
                  Add to cart
                </button>
                <div className="popup-data">
                  <Cart
                    data={cart}
                  />
                </div>
              </div>
              <div className="class2"><button className="btn2">Buy Now</button></div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default ItemList;