import React, { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input, newDate);
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
        data-testid="text-input"
      />
      <input
        type="date"
        className="todo-input-date"
        onChange={(e) => {
          setNewDate(e.target.value);
        }}
        value={newDate}
        data-testid="date-input"
      ></input>
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}
