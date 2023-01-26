import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function TodoList(props) {
  const { todo, removeTodo } = props;

  return (
    <div className="todo-row">
      <div className="todo-row-text">
        <div className="icon-container">
          <RiCloseCircleLine
            className="icon"
            onClick={() => removeTodo(todo.id)}
          />
        </div>
        {todo.text}
      </div>
      <div className="todo-row-date">{todo.date}</div>
    </div>
  );
}
