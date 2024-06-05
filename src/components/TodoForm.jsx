import React, { useState, useContext } from "react";
import { TodoContext } from "../App";

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle(""); // Reset title-nya
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={handleChangeTitle}
          value={title}
        />
        <button type="submit" style={styles.button}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formInput: {
    height: "50px",
    width: "60%",
    fontSize: "16px",
    padding: "0 16px",
    marginRight: "10px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  },
  button: {
    height: "54px",
    fontSize: "16px",
    padding: "0 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default TodoForm;
