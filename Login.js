import React, { useState } from "react";
import Header from "./Header";
import List from "./List";
import "./Login.css";

const Login = props => {
  const NavToHome = () => {
    const name = document.getElementById("uname").value;
    const pwd = document.getElementById("pwd").value;
    if (name && pwd) {
      props.history.push("/");
    }
  };
  return (
    <div>
      <Header />
      <List />
      <div className="col-lg-12  login-sign-up-bg">
        <div class="col-lg-4 login-class">
          <h2>Login</h2>
          <form>
            <div className="jumbotron">
              <div>
                <label for="uname">Email or Mobile No: </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  required
                  id="uname"
                  name="uname"
                />
              </div>
              <br />
              <div>
                <label for="pwd">Password: </label>
                <br />
                <input
                  type="password"
                  className="form-control"
                  required
                  id="pwd"
                  name="pwd"
                />
              </div>
              <br />
            </div>
            <div class="login-btn">
              <button class="btn btn-primary log-btn" onClick={NavToHome}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
