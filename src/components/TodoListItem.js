import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function TodoListItem({ todo, removeTodo }) {
  return (
    <li className="todo-row">
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
    </li>
  );
}
