import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoListItem from "../components/TodoListItem";
import TodoSort from "../components/TodoSort";

export default function Login() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = (text, date) => {
    // let id = 1
    // id = todos[todos.length - 1].id + 1;
    // id = todos[0].id + 1; zle

    let todo = { id: counter + 1, text, date, completed: false };

    setCounter((prev) => prev + 1);

    setTodos((prev) => [...prev, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1 className="todo-h1">Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoSort todos={todos} setTodos={setTodos} />
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
