import React from "react";

function TodoList({ todos, handleDeleteTodo }) {
  return (
    <ul className={`${todos.length !== 0 ? "border" : ""} p-2 rounded list-group d-flex gap-4 list-group-flush mt-5`}>
      {todos.map((item, index) => (
        <li key={index} className="rounded list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button onClick={()=>handleDeleteTodo(index)} className="btn btn-danger">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
