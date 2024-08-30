import React, { useEffect, useRef } from "react";
import Counter from "./counter";

const TextInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>UseRef Example 2</h2>
      <input ref={inputRef} type="text" placeholder="focus" />
   <Counter />
    </div>
  );
};

export default TextInput;
