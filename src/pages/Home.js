import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoListItem from "../components/TodoListItem";
import TodoSort from "../components/TodoSort";

export default function Login() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const addTodo = (text, date) => {
    const todo = { id: counter + 1, text, date };

    const todosCopy = [...todos];
    todosCopy.push(todo);

    setCounter((prev) => prev + 1);

    setTodos((prev) => [...prev, todo]);
    localStorage.setItem("todos", JSON.stringify(todosCopy));
    localStorage.setItem("counter", JSON.stringify(counter + 1));
  };

  const removeTodo = (id) => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    setCounter(JSON.parse(localStorage.getItem("counter")) || 0);
  }, []);

  return (
    <div className="todo-app">
      <h1 className="todo-h1">Todo list</h1>
      <TodoForm addTodo={addTodo} />
      <TodoSort todos={todos} setTodos={setTodos} />
      <ul>
        {todos?.map((todo) => {
          return (
            <TodoListItem removeTodo={removeTodo} todo={todo} key={todo.id} />
          );
        })}
      </ul>
    </div>
  );
}

//localStorage only supports strings. Use JSON.stringify() and JSON.parse()
