import React, { createContext, useState } from "react";
import Child from "./Child";

export  const GlobalInfo = createContext();
function CreateContext() {
  const [color, setColor] = useState("red");

const getDay = (item) =>{      //child to parent
    console.log(item);
}

  return (
    <GlobalInfo.Provider value={{appColor: color, getDay: getDay }}>  
      <div>
        <h1>Create Context Component</h1>
        <Child />
      </div>
    </GlobalInfo.Provider>
  );
}

export default CreateContext;
