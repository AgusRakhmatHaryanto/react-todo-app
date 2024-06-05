import React, { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  console.log(todos);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })} */}
      <Todos todos={todos} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#C5DEED",
    border: "2px solid #f4f4f4",
    margin: "0 auto",
    maxWidth: "1100px",
    marginTop: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "all 0.3s ease-in",

    "&:hover": {
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  },
};

export default App;
