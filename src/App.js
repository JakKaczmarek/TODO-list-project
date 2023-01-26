import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (input, newDate) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: input, date: newDate, completed: false };
    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="todo-h1">Todo list</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoList removeTodo={removeTodo} todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default App;
