import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-emerald-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-200 text-sm">{task.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded mt-3 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
