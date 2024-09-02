import React, { useState } from "react";

const MyComponent = () => {
  const [number, setNumber] = useState(0);

  const handleOnChange = (event) => {
    setNumber(event.target.value);
  };
  return (
    <div>
      <input type="number" value={number} onChange={handleOnChange} />
    </div>
  );
};

export default MyComponent;
