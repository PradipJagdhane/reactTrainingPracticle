import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  function incre() {
    setCount(count + 1);
  }

  function decre() {
    setCount(count - 1);
  }

  return { count, incre, decre };
};

export default useCounter;
