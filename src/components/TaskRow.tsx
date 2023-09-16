import React from "react";
import { Button } from "antd";
import { Task } from "../App";

interface TaskRowProps {
  task: Task;
  onDelete: () => void;
}

const TaskRow: React.FC<TaskRowProps> = ({
  task,
  onDelete,
}) => {
  return (
    <tr>
      <td className="pl-20 px-4 py-2">
        {task.title}
      </td>
      <td className="px-4 py-2">{task.desc}</td>
      <td className="px-4 py-2">
        {
          task.theDate
            ?.toISOString()
            .split("T")[0]
        }
      </td>
      <td className="px-4 py-2">{task.status}</td>
      <td className="px-4 py-2">
        <Button
          type="primary"
          className="bg-red-400 text-white rounded font-semibold py-1 px-3 "
          onClick={onDelete}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TaskRow;
