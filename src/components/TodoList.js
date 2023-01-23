import React from "react";

export default function TodoList(props) {
  return <div className="todo-row">{props.todo.text}</div>;
}
