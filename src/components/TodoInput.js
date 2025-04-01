import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Form, Button } from "react-bootstrap";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3 d-flex" id='newtask'>
      <Form.Control
        type="text"
        placeholder="Enter a task..."
        className=""
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="primary" type="submit" className="ms-2" id='push'>
        Add
      </Button>
    </Form>
  );
};

export default TodoInput;
