import React from "react";

export const Form = ({ text, addTodo, setText }) => {
  return (
    <div className="forms">
      <input
        type="text"
        placeholder="Add todo ..."
        className="addTodo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="addButton" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};
