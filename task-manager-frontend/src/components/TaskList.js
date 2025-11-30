export default function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Your Tasks</h2>

      {tasks.map((task) => (
        <div className="card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          {/* Time display */}
          {task.time && (
            <p style={{ fontWeight: "bold" }}>🕒 Time: {task.time}</p>
          )}

          {/* Status badge */}
          <span
            className={`badge ${
              task.status === "Completed" ? "completed" : "pending"
            }`}
          >
            {task.status}
          </span>

          <div style={{ marginTop: "15px" }}>

            {/* Mark Completed */}
            <button
              className="btn"
              onClick={() =>
                updateTask(task.id, { ...task, status: "Completed" })
              }
            >
              Mark Complete
            </button>

            {/* Mark Not Completed */}
            <button
              className="btn"
              style={{
                marginLeft: "10px",
                background: "#ff9800",
                color: "white",
              }}
              onClick={() =>
                updateTask(task.id, { ...task, status: "Pending" })
              }
            >
              Not Completed
            </button>

            {/* Delete */}
            <button
              className="btn"
              style={{
                marginLeft: "10px",
                background: "#ff4b4b",
                color: "white",
              }}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
