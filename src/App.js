import React, { Component } from "react";
import "./App.css";
//we import fire where ever we need to use the authentication
import fire from "./config/Fire";
import Home from "./Home";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  //This function is being called on componentDidMount. It’s listening to any sign our signout changes.
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    // from fire we use the auth method and then we use the 'onauth..' method which adds an observer to the sign in state
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      //if the user is login  we change the state of user from null to the user that is login
      //we get the user data when they login or singup
      if (user) {
        this.setState({ user });
        //if the user is not login we change or rather we keep the state same as null
      } else {
        this.setState({ user: null });
      }
    });
  };
  render() {
    return (
      // if the user is login we will direct him to the home page
      //if the user is not login we direct him to the login page
      <div>{this.state.user ? <Home /> : <Login />}</div>
    );
  }
}

export default App;
