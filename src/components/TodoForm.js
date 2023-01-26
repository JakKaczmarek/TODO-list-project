import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input, newDate);
    // props.addTodo(newDate);
    // setInput("");
    // setNewDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input-text"
        placeholder="Add anything"
      />
      <input
        type="date"
        className="todo-input-date"
        onChange={(e) => setNewDate(e.target.value)}
        value={newDate}
      ></input>
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}
