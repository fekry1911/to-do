import { useState } from "react";
import AddTaskComponent from "./component/AddTaskComponent";
import Tasks from "./component/Tasks";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  date?: string;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTodo = (task: string) => {
    console.log(task);
    const today = new Date();
    const onlyDate = today.toISOString().slice(0, 10);
    console.log(onlyDate); // 2025-08-30

    setTasks([
      ...tasks,
      {
        id: Math.random(),
        title: task,
        completed: false,
        date: onlyDate,
      },
    ]);
  };
  const deleteTodo = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completeTodo = (id: number) => {
    const today = new Date();
    const onlyDate = today.toISOString().slice(0, 10);
    console.log(onlyDate);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed, date: onlyDate }
          : task
      )
    );
  };
  return (
    <div className="row min-vh-100">
      <div className="col-4">
        <AddTaskComponent addTodo={addTodo} />
      </div>
      <div className="col">
        <Tasks
          tasks={tasks}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      </div>
    </div>
  );
}

export default App;
