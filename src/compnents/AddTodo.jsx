import React from "react";

function AddTodo({ input, setInput, handleBtn }) {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
console.log(input)
  return (
    <div className="Todo-Container d-flex flex-column mt-5">
      <div className="input-button d-flex gap-3 justify-content-center align-items-center">
        <input
          onChange={handleInputChange}
          value={input}
          className="form-control input"
          type="text"
          placeholder="Enter task..."
        />
        <button onClick={handleBtn} className="btn btn-warning">Add</button>
      </div>
    </div>
  );
}

export default AddTodo;
