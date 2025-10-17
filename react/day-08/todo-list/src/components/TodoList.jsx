import React from "react";
import { TodoItem } from "./TodoItem";


export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  console.log("todo", todos);
  if (todos.length == 0) {
    return <p className="text-center text-muted">No tasks yet!</p>;
  }
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};



