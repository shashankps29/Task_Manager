import { useState } from "react";

export default function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState(""); // ⏰ NEW FIELD

  function submitForm(e) {
    e.preventDefault();

    if (!title) return;

    addTask({
      title,
      description,
      time,              // ⏰ sending time to backend
      status: "Pending",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setTime("");
  }

  return (
    <div className="card">
      <h2>Add New Task</h2>

      <input
        className="input"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="input"
        placeholder="Task description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* TIME INPUT */}
      <input
        type="time"
        className="input"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn" onClick={submitForm}>
        Add Task
      </button>
    </div>
  );
}
