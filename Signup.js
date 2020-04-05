import React from "react";
import Header from "./Header";
import List from "./List";
import "./Signup.css";

const Signup = props => {
  const NavToHome =() => {
    const name = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const pno = document.getElementById("pno").value;
    const pwd = document.getElementById("pwd").value;
    const confirmpwd = document.getElementById("confirmpwd").value;
    if (name && email && pno && pwd && confirmpwd) {
      props.history.push("/");
    }
  };
  return (
    <div>
      <Header />
      <List />
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 login-sign-up-bg">
        <div class="col-lg-4 form-class pt15">
          <h2>Registration</h2>
          <form>
            <div className="jumbotron">
              <div>
                <label for="uname">Name: </label> <br />
                <input
                  type="text"
                  required
                  id="uname"
                  className="form-control"
                  name="uname"
                />
              </div>
              <br />
              <div>
                <label for="email">Email: </label> <br />
                <input
                  type="email"
                  required
                  id="email"
                  className="form-control"
                  name="email"
                />
              </div>
              <br />
              <div>
                <label for="pno">PhoneNo: </label> <br />
                <input
                  type="text"
                  required
                  id="pno"
                  className="form-control"
                  name="pno"
                />
              </div>
              <br />
              <div>
                <label for="pwd">Password: </label> <br />
                <input
                  type="password"
                  required
                  id="pwd"
                  className="form-control"
                  name="pwd"
                />
              </div>
              <br />
              <div>
                <label for="confirmpwd">Confirm Password: </label> <br />
                <input
                  type="password"
                  required
                  id="confirmpwd"
                  className="form-control"
                  name="confirmpwd"
                />
              </div>
              <br />
            </div>
            <div className="signup-btn">
              <button class="btn btn-primary" onClick={NavToHome}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
