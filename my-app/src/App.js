import React, { Component } from "react";
import Ninjas from "./Ninjas";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 25, belt: "red", id: 1 },
      { name: "Mike", age: 35, belt: "black", id: 2 },
      { name: "Jude", age: 30, belt: "pink", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* // Below (self closing tag), nests the Ninja component within the App component */}
          <Ninjas ninjas={this.state.ninjas} />
        </header>
      </div>
    );
  }
}

export default App;
