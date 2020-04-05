import React from 'react';
import './List.scss';
import { Link } from 'react-router-dom';

const list = ['Men', 'Women', 'Kids', 'Electronics', 'Furniture', 'Books'];

class List extends React.Component {
  render() {
    return (
      <div class="fluid-container main menu-styl" >
        <div class="container row div col-lg-12" style={{ color: "white", padding: '5px' }}>
          <div class="col-lg-10 row">
            {
              list && list.map((item) => {
                return (
                  <div class="col-lg-2 item">
                    <div className="dropdown vertical-sub">
                      {item}
                      <div className="dropdown-content">
                        <a href="#">Shoes</a>
                        <a href="#">Cloths</a>
                        <a href="#">Watches</a>
                        <a href="#">Health & Personal Care</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div class="col-lg-1 cart-icon">
            <ul>
              <li>
                <Link to="/cart">
                  <div id="ex4">
                    <span class="p1  fa-2x has-badge" data-count="0">
                      <i class="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="0"></i>
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default List;