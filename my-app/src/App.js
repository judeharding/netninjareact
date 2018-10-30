import React, { Component } from "react";
import Ninjas from "./Ninjas";
import logo from "./logo.svg";
import "./App.css";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 20, belt: "red", id: 1 },
      { name: "Mike", age: 35, belt: "black", id: 2 },
      { name: "Jude", age: 30, belt: "pink", id: 3 }
    ]
  };
  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  };
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
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
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja} />
          <p />
        </header>
      </div>
    );
  }
}

export default App;
