import React, { useState } from "react";

const Counter = () => {
  console.log("Counter");
  const [value, setValue] = useState(0);

  const handleIncrement = (event) => {
    console.log("Increment");
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = (event) => {
    console.log("decrement");
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <div>
      {console.log("counter render")}
      <button onClick={handleDecrement}>-</button>
      <span>{value}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
