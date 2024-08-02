import React from "react";

function WelcomeMessage({ todos }) {
  return (
    <>
      {todos.length == 0 ? (
        <div className="mt-5 bg-warning p-4 rounded">
          <h1>Hello, Write Your Today Tasks...</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default WelcomeMessage;
