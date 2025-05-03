import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, complete: false }
    ]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prev) => prev.map(todo => (todo.id === id ? newTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext }; // <<< Add this if you really need
