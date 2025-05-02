// src/components/TaskDetailModal/TaskDescriptionSection.tsx
import React from "react";

const TaskDescriptionSection = ({ title }) => {
  return <>
    <h2 className="text-2xl font-medium leading-none">{title}</h2>
    <div className="flex flex-col gap-2">
      <div className="font-medium leading-none">Task Description</div>
      <textarea
        className="border rounded-lg px-3 py-2"
        rows={6}
        defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry..." />
    </div>
  </>;
};

export default TaskDescriptionSection;
