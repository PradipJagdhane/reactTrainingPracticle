import React, { useState } from "react";

const UseState = () => {
  const [data, setData] = useState("old");

  function updateData(){
    setData('new');
  }
  return (
    <div>
      <h1>This conter update using useState {data}</h1>
      <button onClick={updateData}>updateData</button>
    </div>
  
  );
};

export default UseState;
