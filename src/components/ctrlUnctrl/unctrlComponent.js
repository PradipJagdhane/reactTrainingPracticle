import React, { useRef } from "react";

const UncontrolledComponent = () => {
let inputRef = useRef(null);
let inputRef2 = useRef(null);

function handleSubmit(e){
e.preventDefault();
console.log("input field 1", inputRef.current.value);
console.log("input field 2", inputRef2.current.value);
let input3 = document.getElementById("input3").value
console.log("Input 3", input3);
}

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" /><br /><br />
        <input ref={inputRef2} type="text" /><br /><br />
        <input id="input3" type="text"/><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
