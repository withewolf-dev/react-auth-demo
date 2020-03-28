import React, { Component } from "react";
import fire from "./config/Fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout=()=> {
    fire.auth().signOut();  //signs out the current user
  }
  render() {

    // some inline styling 
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
      <div>
        <h1 style={mystyle}>welome to the home page </h1>
        <button onClick={this.logout}>Logout</button> 
        {/* calls the logout method on clickng on logout */}
      </div>
    );
  }
}
export default Home;
