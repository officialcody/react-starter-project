import React, { useState } from "react";
import "./App.css";
import useWindow from "./customhooks/useWindow";
import TodoApp from "./components/TodoApp";

function App() {
  const [value, setValue] = useState("");
  const { windowHeight, windowWidth } = useWindow();

  return (
    <div className="App">
      {/* <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div>Width: {windowWidth}</div>
      <div>Height: {windowHeight}</div> */}
      <TodoApp />
    </div>
  );
}

export default App;
