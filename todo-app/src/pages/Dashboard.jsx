import { getUser } from "../services/auth";
import { useEffect, useState } from "react";
import api from "../services/auth";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const user = getUser();
  const username = user?.name;

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewDesc, setViewDesc] = useState(null);

  const [status, setStatus] = useState("TODO");

  // Fetch todos on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let todoData;
        const res = await api.get("/tasks");
        if (res.data.data.length > 0) {
          todoData = res.data.data.filter((todo) => todo.owner === username);
        }

        setTodos(todoData);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-zinc-900 to-blue-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-zinc-800 bg-black/40 backdrop-blur">
        <h1 className="text-xl font-semibold text-blue-500">Todo Dashboard</h1>
        <div className="text-zinc-300">
          Welcome, <span className="text-white font-medium">{username}</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Search */}
        <div className="flex gap-3 mb-6 justify-center items-center">
          <input
            type="search"
            placeholder="Search tasks..."
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          <label className="flex flex-col text-zinc-300">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-black border border-zinc-700 rounded-lg px-4 py-3.5 text-white"
            >
              <option value="TODO">Todo</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Completed</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
          </label>
        </div>

        {/* Todo List */}
        <div className="bg-zinc-900 rounded-xl border border-zinc-800 shadow-lg">
          <div className="p-4 border-b border-zinc-800 flex justify-between">
            <h2 className="text-lg font-semibold">Your Todos</h2>
            <button className="bg-green-500 p-2 rounded-md cursor-pointer">
              Create a Task
            </button>
          </div>

          {loading ? (
            <div className="p-6 text-zinc-400">Loading todos...</div>
          ) : todos.length === 0 ? (
            <div className="p-6 text-zinc-400">No todos found</div>
          ) : (
            <div className="divide-y divide-zinc-800">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex justify-between items-center p-4 hover:bg-zinc-800/40 transition"
                >
                  <div>
                    <div className="font-medium text-white">{todo.name}</div>
                    <button
                      onClick={() =>
                        setViewDesc(viewDesc === todo.id ? null : todo.id)
                      }
                      className="text-sm cursor-pointer text-blue-500 hover:text-blue-400"
                    >
                      View Description
                    </button>

                    {viewDesc === todo.id ? (
                      <div className="w-full bg-gray-400">
                        {todo.description}
                      </div>
                    ) : null}
                  </div>

                  {/* Right Side Buttons */}
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 rounded-lg text-sm transition">
                      Edit
                    </button>
                    <div
                      className={`todo-status status-${todo.status.toLowerCase()}`}
                    >
                      {todo.status}
                    </div>

                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="px-4 py-2 cursor-pointer bg-red-600 hover:bg-red-700 rounded-lg text-sm transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
