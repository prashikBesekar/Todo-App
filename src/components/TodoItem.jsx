import { useState } from "react";
import { useTodos } from "../contexts";
const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [msg, setMsg] = useState(todo.text);
  const { updateTodo, toggleTodo, deleteTodo } = useTodos();

  const saveEdit = () => {
    updateTodo(todo.id, { ...todo, text: msg });
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md transition-all ${
        todo.complete ? "opacity-70 line-through" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo.id)}
          className="w-5 h-5 cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            className="border-b-2 border-blue-400 bg-transparent focus:outline-none dark:text-white"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        ) : (
          <p className="text-lg dark:text-white">{todo.text}</p>
        )}
      </div>

      <div className="flex gap-2">
        {!todo.complete && (
          <button
            onClick={() => {
              if (isEditing) {
                saveEdit();
              } else {
                setIsEditing(true);
              }
            }}
            className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
