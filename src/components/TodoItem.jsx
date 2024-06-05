import React, { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      color: todo.completed ? "gray" : "#333",
      transition: "color 0.3s ease",
    };
  };

  return (
    <div style={getTodoItemStyle(todo.completed)}>
      <input
        type="checkbox"
        style={styles.checkbox}
        checked={todo.completed}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const getTodoItemStyle = (completed) => ({
  ...styles.todoItem,
  backgroundColor: completed ? "#f0f0f0" : "#fff",
  boxShadow: completed ? "none" : "0 4px 6px rgba(0, 0, 0, 0.1)",
});

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    marginBottom: "10px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  checkbox: {
    height: "18px",
    width: "18px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease",
  },
};

export default TodoItem;
