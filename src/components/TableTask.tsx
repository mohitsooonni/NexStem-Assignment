import React from "react";
import { Task } from "../App";
import TaskRow from "./TaskRow";

interface TaskTableProps {
  tasks: Task[];
  onDelete: (index: number) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({
  tasks,
  onDelete,
}) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="pl-20 text-xl px-4 py-2 text-left">
            Title
          </th>
          <th className="text-xl px-4 py-2 text-left">
            Description
          </th>
          <th className="text-xl px-4 py-2 text-left">
            Date
          </th>
          <th className="text-xl px-4 py-2 text-left">
            Status
          </th>
          <th className="text-xl px-4 py-2 text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <TaskRow
            key={index}
            task={task}
            onDelete={() => onDelete(index)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
