import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
} from "antd";
import { Task } from "../App";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
}) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [theDate, setTheDate] =
    useState<Date | null>(null);
  const [status, setStatus] = useState<
    string | undefined
  >(undefined);

  const handleDateChange = (date: any) => {
    setTheDate(date);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  const submitHandler: React.MouseEventHandler<
    HTMLElement
  > = (
    e: React.MouseEvent<HTMLElement>
  ): void => {
    e.preventDefault();
    const newTask = {
      title,
      desc,
      theDate,
      status: status || "",
    };
    onSubmit(newTask);

    setTitle("");
    setDesc("");
    setTheDate(null);
    setStatus(undefined);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
      className="p-10 m-10 "
    >
      <Form.Item label="Title">
        <Input
          placeholder="Enter your title here..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Description">
        <Input
          placeholder="Enter the description here..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item label="Select Date">
        <DatePicker
          onChange={handleDateChange}
          format="YYYY-MM-DD"
        />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Select
          onChange={handleStatusChange}
          value={status}
          placeholder="Select status"
        >
          <Select.Option value="To Do">
            To Do
          </Select.Option>
          <Select.Option value="Ongoing">
            Ongoing
          </Select.Option>
          <Select.Option value="Stalled">
            Stalled
          </Select.Option>
          <Select.Option value="Done">
            Done
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={submitHandler}
          className="bg-black text-white px-8 py-2 text-2xl font-bold rounded ml-10 mt-5"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
