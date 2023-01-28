import React from "react";

export default function TodoSort() {
  const sortByNumber = () => {
    sort((a, b) => b.date - a.date);
    // if () {
    //   sort((a, b) => b.date - a.date);
    // } else {
    //   sort((a, b) => a.date - b.date);
    // }
  };
  return (
    <button type="submit" className="sortBtn" onClick={sortByNumber}>
      Sort ASC/DES
    </button>
  );
}
