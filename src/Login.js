import React, { Component } from "react";
import fire from "./config/Fire";

class Login extends Component {
 
 
    constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  signup = (e) => {
    (e).preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter email address"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            id="password"
            placeholder="enter password"
            value={this.state.password}
          />
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </form>
      </div>
    );
  }
}
export default Login;
