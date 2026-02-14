import axios from "axios";
import { useState } from "react";
import { getUser } from "../services/auth";

function CreateTask({ setCreating }) {
  const user = getUser();
  const username = user?.name;
  const [createName, setCreateName] = useState("");
  const [createDescription, setCreateDescription] = useState("");

  const [createError, setCreateError] = useState("");
  const [createLoading, setCreateLoading] = useState(false);

  async function postTask(e) {
    e.preventDefault();

    if (!createName.trim()) {
      setCreateError("Name cannot be empty");
      return;
    }

    if (!createDescription.trim()) {
      setCreateError("Description cannot be empty");
      return;
    }

    setCreateLoading(true);
    setCreateError("");

    try {
      const { data } = await axios.post("https://api.oluwasetemi.dev/tasks", {
        name: createName,
        description: createDescription,
        status: "TODO",
        owner: username,
      });

      console.log(data);

      setCreateLoading(false);

      // Close modal
      setCreating(false);

      // Optional: reload tasks instead of redirect
      window.location.reload();
    } catch (error) {
      console.error(error.response?.data || error.message);

      setCreateError(error.response?.data?.message || "Failed to create task");

      setCreateLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-xl w-full max-w-md p-6 relative shadow-lg shadow-blue-500/20">
        {/* Close Button */}
        <button
          onClick={() => setCreating(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-white mb-4">Create Task</h2>

        <form className="flex flex-col gap-4" onSubmit={postTask}>
          {/* Name */}
          <label className="flex flex-col text-zinc-300">
            Task Name
            <input
              type="text"
              value={createName}
              onChange={(e) => setCreateName(e.target.value)}
              className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
            />
          </label>

          {/* Description */}
          <label className="flex flex-col text-zinc-300">
            Task Description
            <input
              type="text"
              value={createDescription}
              onChange={(e) => setCreateDescription(e.target.value)}
              className="bg-black border border-zinc-700 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
            />
          </label>

          {/* Error */}
          {createError && (
            <div className="text-red-500 text-sm">{createError}</div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={createLoading}
            className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-medium py-2 rounded-lg transition"
          >
            {createLoading ? "Creating..." : "Create Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
