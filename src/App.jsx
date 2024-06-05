import React, { useState, createContext } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

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

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updateTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") return;

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo, addTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#333",
  },
};

export default App;
