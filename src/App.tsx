import "./App.css";
import React, { useState } from "react";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TableTask";

export interface Task {
  title: string;
  desc: string;
  theDate: Date | null;
  status: string;
}

const App: React.FC = () => {
  const [mainTask, setMainTask] = useState<
    Task[]
  >([]);

  const addTask = (newTask: Task) => {
    setMainTask([...mainTask, newTask]);
  };

  const deleteTask = (index: number) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  return (
    <>
      <Heading text="My todo list" />
      <TaskForm onSubmit={addTask} />
      <hr />
      <div className="p-8  bg-gray-400 max-w-full text-xl">
        <TaskTable
          tasks={mainTask}
          onDelete={deleteTask}
        />
      </div>
    </>
  );
};

export default App;
