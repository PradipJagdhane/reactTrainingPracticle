import React, { useMemo, useState } from "react";

const UseMemoEx = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(20);

  // function multiply(){                             //unnecessary rendering
  //     console.log("rendered multiply function")
  //    return count * 5;
  // }

  const multiFuncWithMemo = useMemo(function multiply() {
    console.log("render mulpiply function");
    return count * 2;
  },[count]);

  return (
    <div>
      <h1>UseMemo Example</h1>
      <h2>Count{count}</h2>
      <h3>Item: {item}</h3>
      <h3>Multiplu Function:{multiFuncWithMemo}</h3>
      <button onClick={() => setCount(count + 1)}>update Count</button>
      <button onClick={() => setItem(item * 2)}>update Item</button>
    </div>
  );
};
export default UseMemoEx;
