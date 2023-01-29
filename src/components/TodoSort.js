import React, { useState } from "react";

export default function TodoSort({ todos, setTodos }) {
  const [sortType, setSortType] = useState("DESC");
  const sortByDate = () => {
    console.log(todos);
    console.log(sortType);
    // setSortType(sortType === "DESC" ? "ASC" : "DESC");

    if (sortType === "ASC") {
      todos.sort((a, b) => (b.date > a.date ? 1 : -1));
    } else {
      todos.sort((a, b) => (b.date > a.date ? -1 : 1));
    }
    setSortType(sortType === "DESC" ? "ASC" : "DESC");
    setTodos([...todos]);
    console.log(todos);
    console.log(sortType);
  };
  return (
    <button type="submit" className="sortBtn" onClick={sortByDate}>
      Sort ASC/DES
    </button>
  );
}
