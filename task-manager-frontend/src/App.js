import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import AnalogClock from "./components/AnalogClock";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend
  async function loadTasks() {
    const res = await fetch("http://localhost:8080/api/tasks");
    const data = await res.json();
    setTasks(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  // Add Task
  async function addTask(task) {
    await fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    loadTasks();
  }

  // Delete Task
  async function deleteTask(id) {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "DELETE",
    });
    loadTasks();
  }

  // Update Task
  async function updateTask(id, updatedTask) {
    await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    loadTasks();
  }

  return (
    <div style={{ display: "flex" }}>

      {/* LEFT SIDE CLOCK */}
      <AnalogClock />

      {/* RIGHT SIDE MAIN CONTENT */}
      <div style={{ marginLeft: "40px", width: "100%" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Task Manager
        </h1>

        <AddTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>

    </div>
  );
}

export default App;
