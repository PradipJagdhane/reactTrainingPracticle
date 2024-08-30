import React, { useReducer } from "react";

const initialState = 5;
const reducer = (state, action) => {
  console.log("State", state);
  console.log("Actionss", action);


  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
        return 0;

    default:
      return state;
  }

};

const  Counter = () => {
 const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Counter Ex. Using UseReducer</h2>
      Count<h2>{count}</h2>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
      <button onClick={() => dispatch("Reset")}>Reset</button>
    </div>
  );
};

export default Counter;
