import React, { useState, useEffect } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");
  const filterValues = ["all", "completed", "pending"];

  // Load todos from local storage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodos(savedTodos);
  }, []);

  // Save todos to local storage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  const renderFilterButtons = () => {
    return filterValues.map((value, index) => (
      <button
        key={value[0] + index}
        className={
          filter === value
            ? "px-2 py-1 rounded-lg bg-gray-100"
            : "px-2 py-1 rounded-lg bg-transparent"
        }
        onClick={() => setFilter(value)}
      >
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </button>
    ));
  };

  return (
    <div className="flex justify-center">
      <div className="block">
        <h1 className="text-4xl font-bold text-center m-10">Todo List</h1>
        <div className="flex justify-around m-2 p-2">
          <input
            className="border rounded-lg px-2 py-1 w-3/5"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
          />
          <button
            className="bg-blue-500 px-4 py-1 text-white rounded-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div className="flex justify-between p-2 m-2">
          {/* <button
            className={filter === "all" ? "bg-gray-100" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("pending")}>Pending</button> */}
          {renderFilterButtons()}
        </div>
        <ul className="p-2 m-2">
          {filteredTodos.map((todo) => (
            <li
              className="m-2 bg-gray-100 hover:bg-gray-200 rounded-lg p-4"
              key={todo.id}
            >
              <input
                className="m-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span className="p-2">{todo.text}</span>
              <button
                className="bg-red-500 px-2 py-1 text-white rounded-lg float-end"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
