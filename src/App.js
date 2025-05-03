import { TodoProvider } from "./contexts";
import Navigation from "./Navigation";
import TodoList from "./components/TodoList";
import { TodoForm } from "./components"; 

function App() {
  return (
    <TodoProvider>
        <Navigation/>
      <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 transition-all">
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="fixed top-5 right-5 p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow"
        >
          🌗
        </button>

        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
