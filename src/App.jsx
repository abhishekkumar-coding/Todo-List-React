import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./compnents/AddTodo";
import TodoList from "./compnents/TodoList";
import WelcomeMessage from "./compnents/WelcomeMessage";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log(todos.item);

  const handleBtn = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput(""); // Clear the input field after adding
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    console.log(index);
    setTodos(newTodos);
  };

  return (
    <div className="container rounded d-flex flex-column align-items-center bg-success mt-4">
      <AddTodo input={input} setInput={setInput} handleBtn={handleBtn} />
      <WelcomeMessage todos={todos} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
