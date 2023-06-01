import React, { useState } from "react";

const TodoApp = () => {
  return;
  <>
    <input
      type="text"
      placeholder="enter todo"
      onChange={(e) => SetInputData(e.target.value)}
    />
    <button>add</button>
  </>;
};

export default TodoApp;
