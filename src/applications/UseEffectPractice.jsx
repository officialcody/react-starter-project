import React, { useCallback, useEffect, useState } from "react";

const UseEffectPractice = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const myFunction = useCallback(() => {
    console.log("myfunction");
  }, []);

  useEffect(() => {
    myFunction();
  }, [myFunction]);

  return (
    <div className="flex justify-center">
      {console.log("render")}
      <div className="m-2 p-2">
        {count}
        <button
          className="bg-red-500 p-2 m-2 rounded-lg text-white"
          onClick={() => incrementCount()}
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default UseEffectPractice;
