import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  changeHandler(e) {
    this.props.searchUpdated(e.target.value);
  }

  render() {
    return (
      <div class="fluid-container main">
        <div class="row div mt2">
          <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 div1">
            <ul>
              <li>
                <Link to="/">
                  <i class='fas icon set-font'>&#xf07a;</i>
                </Link>
              </li>
            </ul>
            <h3 className='set-header'>Hyper Bazar
            <div className='tag-line'>A market for you</div>
            </h3>
          </div>
          <div class="col-lg-5 div2">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              onChange={this.changeHandler.bind(this)}
              className='set-input-height'
            />
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 div3">
            <button type="button" class="btn login-font set-float-right">
              <ul>
                <li>
                  <Link to="/login">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                    LogIn
            </Link>
                </li>
              </ul>
            </button>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12 div4">
            <button type="button" class="btn login-font ">
              <ul>
                <li>
                  <Link to="/signup">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    SignUp
            </Link>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchUpdated: (val) => dispatch({ type: 'SEARCH_UPDATED', val })
});


export default connect(null, mapDispatchToProps)(Header);