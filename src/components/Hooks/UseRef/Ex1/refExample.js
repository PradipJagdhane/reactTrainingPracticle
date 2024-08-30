import React, { useRef, useState } from "react";
import TextInput from "./textInput";

const UseRef = () => {
    const refElement = useRef("");
    const [name, setName] = useState("Pradip");

    function Reset(){
        setName("")
        refElement.current.focus()
    }
  return (
    <div>
      <h1>UseRef Example</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) =>{setName(e.target.value)}}/>
      <button onClick={Reset}>Reset</button>
      <TextInput />
    </div>
  );
};

export default UseRef;
