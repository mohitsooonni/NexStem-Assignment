import React from "react";
import { Button } from "antd";

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<
  DeleteButtonProps
> = ({ onDelete }) => {
  return (
    <Button
      type="primary"
      className="bg-red-400 text-white rounded font-semibold py-1 px-3"
      onClick={onDelete}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
