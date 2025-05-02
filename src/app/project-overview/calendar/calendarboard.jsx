"use client";;
import defaultEvents from "./events";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { useState } from "react";
import { EventStatus } from "@/types";
import TaskDetailModal from "../task-detail-modal";

const DragAndDropCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

const CalendarBoard = ({ tmTasks, setTmTasks, tmProjects, tmProject }) => {
  const [events, setEvents] = useState(defaultEvents);
  const [tasks, setTasks] = useState(tmTasks || []);
  const [date, setDate] = useState(new Date());
  const [viewOption, setViewOption] = useState(Views.MONTH);
  const [selectedTask, setSelectedTask] = useState(null);

  const moveEvent = ({
    event: e,
    start,
    end,
    isAllDay: droppedOnAllDaySlot
  }) => {
    const idx = events.indexOf(e);
    const event = events[idx];
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const resizeEvent = ({
    event: e,
    start,
    end
  }) => {
    const event = e;
    const nextEvents = events.map((existingEvent) => {
      return existingEvent.title === event.title
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    setEvents(nextEvents);
  };

  const newEvent = (event) => { };

  const getStatusColor = (event) => {
    switch ((event.event).status) {
      case EventStatus.backlog:
        return "bg-gray500";
      case EventStatus.completed:
        return "bg-green500";
      case EventStatus.on_going:
        return "bg-blue500";
      case EventStatus.upcoming:
        return "bg-yellow500 ";
      default:
        return "";
    }
  };

  return (
    <div style={{ minHeight: 740 }}>
      <DragAndDropCalendar
        style={{ height: 700 }}
        selectable
        popup
        localizer={localizer}
        events={events}
        onNavigate={(newDate) => {
          setDate(newDate);
        }}
        onView={(option) => {
          setViewOption(option);
        }}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        onSelectSlot={newEvent}
        onDoubleClickEvent={(event) => {
          setSelectedTask({
            id: "1",
            title: "3 Demo concepts for Home page",
            priority: "Medium",
            date: "September 25, 2023",
            project: "The Freelancer Website",
            members: ["/default.png", "/default1.png"],
          });
        }}
        view={viewOption}
        date={date}
        components={{
          event: (event) => (
            <div className={`text-xs py-1 px-1.5 ${getStatusColor(event)}`}>
              {event.title}
            </div>
          ),
        }} />
      <TaskDetailModal
        task={selectedTask}
        setTask={setSelectedTask}
        tasks={tasks}
        setTasks={setTasks}
        tmProjects={tmProjects}
        tmProject={tmProject} />
    </div>
  );
};

export default CalendarBoard;
