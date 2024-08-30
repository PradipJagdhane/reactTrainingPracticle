import React, { Component } from "react";
import ItemList from "./itemList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Apple", "Banana", "Orange"],
      counter: 0,
    };
  }

  
  addItem = () => {
    this.setState({
      items: [...this.state.items, "New Item"],
    });
  };

  
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("Parent component rendered");
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment Counter</button>
        <button onClick={this.addItem}>Add Item</button>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
