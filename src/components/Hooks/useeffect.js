import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [data, setData] = useState("data");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData("updateData");
    }, 3000);
    console.log("UseEffect execute");
  }, [data]);

  useEffect(() => {
   const interval =  setInterval(() => {
      setCounter(counter + 1);
    }, 5000);

    return ()=>{
      clearInterval(interval);
    }
  },[counter]);



  return (
    <div>
      <h2>Page render with counter {counter}</h2>
    </div>
  );
};

export default Useeffect;
