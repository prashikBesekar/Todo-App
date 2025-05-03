import { useTodos } from "../contexts";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <p className="mt-10 text-gray-500 dark:text-gray-400 text-lg">
        No todos yet. Add some! 
      </p>
    );
  }

  return (
    <div className="mt-8 w-full max-w-md space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
