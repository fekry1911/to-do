import React, { useRef } from "react";

export default function AddTaskComponent({
  addTodo,
}: {
  addTodo: (task: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  return (
    <div className="container d-flex flex-column align-items-start bg-light p-3 rounded h-100 w-100">
      <h1 className="text-center mb-5 m-0 h-25 p-2">To-Do App!</h1>

      <p className="mb-2 text-center justify-content-center fw-bold fs-5">
        Add new To-Do
      </p>
      <input
        ref={input}
        id="new-task-input"
        className="form-control w-100"
        type="text"
        placeholder="Add new To-Do"
      />
      <button
        className="btn btn-primary mt-3 w-100"
        onClick={() => addTodo(input.current!.value)}
      >
        Add
      </button>
    </div>
  );
}
