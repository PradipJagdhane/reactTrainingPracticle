import React, { useCallback, useState } from "react";

function ChildComponent({ onClick }) {
  console.log("Childcomponent rendered");
  return <button onClick={onClick}>Increment</button>;
}

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <h1>Count:{count}</h1>
      <ChildComponent onClick={handleIncrement} />
    </div>
  );
};

export default ParentComponent;
