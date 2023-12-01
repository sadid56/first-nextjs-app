"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h3>count : {count}</h3>
      <button className="mr-5" onClick={() => setCount(count + 1)}>
        Count
      </button>
      <button onClick={() => setCount(count - 1)}>Decres</button>
    </div>
  );
};

export default Counter;
