import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: "2px solid #f4f4f4",
    backgroundColor: "#f4f4f4",
    fontSize: "24px",
    padding: "12px",
    marginBottom: "8px",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
  },
};

export default TodoItem;