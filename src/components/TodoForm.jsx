import { useState } from "react";
import { useTodos } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full max-w-md">
      <input
        type="text"
        className="flex-1 p-3 rounded-xl shadow-md border-2 border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        placeholder="Enter a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition-all"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
