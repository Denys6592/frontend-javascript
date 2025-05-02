export let EventStatus;

(function(EventStatus) {
  EventStatus["backlog"] = "backlog";
  EventStatus["upcoming"] = "upcoming";
  EventStatus["on_going"] = "ongoing";
  EventStatus["completed"] = "completed";
})(EventStatus || (EventStatus = {}));