import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, clearAll }}>
      {children}
    </TodoContext.Provider>
  );
};
