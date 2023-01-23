import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function TodoList(props) {
  return (
    <div className="todo-row">
      {props.todo.text}
      <div className="icon-container">
        <RiCloseCircleLine className="icon" />
      </div>
    </div>
  );
}
// CZEMU NIE DZIAŁA I WYWALA BŁAD PODCZAS SCIĄGANIA IKONKI
