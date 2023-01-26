import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoListItem from "./components/TodoListItem";
import TodoSort from "./components/TodoSort";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, date) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[todos.length - 1].id + 1;
      // id = todos[0].id + 1; zle
    }
    let todo = { id, text, date, completed: false };
    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1 className="todo-h1">Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoSort />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoListItem removeTodo={removeTodo} todo={todo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
