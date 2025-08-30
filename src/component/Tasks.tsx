import React from "react";
import Button from "react-bootstrap/esm/Button";
interface Props {
  tasks: Array<{
    id: number;
    title: string;
    completed: boolean;
    date?: string;
  }>;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}

export default function Tasks({ tasks, deleteTodo, completeTodo }: Props) {
  return (
    <div className="d-flex flex-column align-items-start bg-light p-3 rounded h-100 w-100">
      <h1 className="text-center">Tasks</h1>
      <div className="d-flex flex-column  rounded p-3 w-100">
        {tasks.length === 0 ? (
          <p className="text-center">No Tasks Added</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="mb-4 bg-white p-2 rounded w-100">
              <div className="d-flex justify-content-between align-items-center  mb-2">
                <span
                  className={`flex-grow-1 fs-2 ${
                    task.completed ? "text-decoration-line-through fs-2 " : ""
                  }`}
                >
                  {task.title}
                </span>
                <div>
                  <Button
                    onClick={() => completeTodo(task.id)}
                    className="m-1"
                    variant={task.completed ? "warning" : "success"}
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </Button>
                  <Button
                    onClick={() => deleteTodo(task.id)}
                    className="m-1"
                    variant="danger"
                  >
                    Delete
                  </Button>
                </div>
              </div>

              <small className="text-muted">{task.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
