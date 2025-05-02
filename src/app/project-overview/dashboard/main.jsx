"use client";;
import React, { useState } from "react";
import Sidebar from "../project-sidebar";

export const VIEWS = {
  BOARD: "Board",
  TABLE: "Table",
  LIST: "List",
  CALENDAR: "Calendar",
  BACKLOG: "Backlog",
};

const Main = () => {
  const [projectModal, setProjectModal] = useState(false);

  return (
    <div className="relative flex px-10 gap-5">
      <Sidebar onOpenModal={() => setProjectModal(true)} />
      <div className="flex-1 flex flex-col gap-8">
        
      </div>
    </div>
  );
};

export default Main;
