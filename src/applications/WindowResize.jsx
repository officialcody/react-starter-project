import React, { useState } from "react";
import useWindow from "../hooks/useWindow";
const WindowResize = () => {
  const [value, setValue] = useState("");
  const { windowHeight, windowWidth } = useWindow();
  return (
    <div className="flex justify-center">
      <div className="block">
        <input
          type="text"
          placeholder="Enter Text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div>Width: {windowWidth}</div>
        <div>Height: {windowHeight}</div>
      </div>
    </div>
  );
};

export default WindowResize;
