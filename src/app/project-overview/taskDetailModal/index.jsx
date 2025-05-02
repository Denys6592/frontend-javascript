// src/components/TaskDetailModal/index.tsx
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";

import TaskModalHeader from "./TaskModalHeader";
import TaskDetailForm from "./TaskDetailForm";
import ActivitySection from "./ActivitySection";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1164px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
};

const TaskDetailModal = ({ task, setTask }) => {
  // Local state for form controls
  const [selectedProject, setSelectedProject] = useState("The Freelancer Website");
  const [selectedLead, setSelectedLead] = useState("Artur Chornyi");
  const [selectedAssignee, setSelectedAssignee] = useState("Artur Chornyi");
  const [selectedPriority, setSelectedPriority] = useState("Urgent");
  const [selectedDate, setSelectedDate] = useState(null);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [notificationActive, setNotificationActive] = useState(false);

  const handleChangeProject = (event) => {
    setSelectedProject(event.target.value);
  };
  const handleChangeLead = (event) => {
    setSelectedLead(event.target.value);
  };
  const handleChangeAssignee = (event) => {
    setSelectedAssignee(event.target.value);
  };
  const handleChangePriority = (event) => {
    setSelectedPriority(event.target.value);
  };
  const handleFileChange = (event) => {
    if (event.target.files) {
      setAttachedFiles([...attachedFiles, ...Array.from(event.target.files)]);
    }
  };
  const handleRemoveFile = (index) => {
    setAttachedFiles(attachedFiles.filter((_, i) => i !== index));
  };
  const handleNotificationChange = (event) => {
    setNotificationActive(event.target.checked);
  };

  const handleSave = () => {
    // Save logic goes here.
    setTask(null);
  };

  return (
    <Modal
      open={!!task}
      onClose={() => setTask(null)}
      aria-labelledby="task-modal-title"
      aria-describedby="task-modal-description">
      <Box sx={style}>
        {task && (
          <>
            <TaskModalHeader title="Task Details" onClose={() => setTask(null)} />
            <div className="flex rounded-b-[20px]">
              <TaskDetailForm
                task={task}
                selectedProject={selectedProject}
                handleChangeProject={handleChangeProject}
                selectedLead={selectedLead}
                handleChangeLead={handleChangeLead}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedPriority={selectedPriority}
                handleChangePriority={handleChangePriority}
                selectedAssignee={selectedAssignee}
                handleChangeAssignee={handleChangeAssignee}
                attachedFiles={attachedFiles}
                handleFileChange={handleFileChange}
                handleRemoveFile={handleRemoveFile}
                notificationActive={notificationActive}
                handleNotificationChange={handleNotificationChange}
                onSave={handleSave} />
              <ActivitySection />
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default TaskDetailModal;
