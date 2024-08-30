import React, { PureComponent } from "react";

class ItemList extends PureComponent {
  render() {
    console.log("ItemList PureComponent rendered");
    return (
      <div>
        <h2>Item List</h2>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
