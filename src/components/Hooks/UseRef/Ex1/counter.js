import React, { useRef } from 'react';
import Button from './button';

function Counter() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(`Count is: ${countRef.current}`);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button><br /> <br />
      <Button />
    </div>
  );
}

export default Counter;
