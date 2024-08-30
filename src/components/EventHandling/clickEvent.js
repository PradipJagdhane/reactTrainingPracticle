import React, { useState } from "react";

const ClickEvent = () => {
  const [title, setTitle] = useState("title");
  function handleclick() {
    setTitle("new Title");
  }

  return (
    <div>
      <h1>Event Handling</h1>
      <h2>{title}</h2>
      <button onClick={handleclick}>update Title</button>
      
    </div>
  );
};

export default ClickEvent;
