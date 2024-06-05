import React from "react";
import TodoItem from "./TodoItem";

const todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    padding: "12px",
    border: "2px solid #f4f4f4",
    margin: "0 auto",
  },
};

export default todos;
