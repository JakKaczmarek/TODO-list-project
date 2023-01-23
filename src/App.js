import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo list</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoList todo={todo} />;
      })}
    </div>
  );
}

export default App;
