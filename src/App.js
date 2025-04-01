import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <TodoProvider>
      <Container className="mt-5">
        <h2 className="text-center">To-Do App</h2>
        <TodoInput />
        <TodoList />
      </Container>
    </TodoProvider>
  );
};

export default App;
