export function setReminder(task) {
  localStorage.setItem("plutoReminder", task);
  return `Reminder set: ${task}`;
}

export function checkReminder() {
  const task = localStorage.getItem("plutoReminder");
  return task ? `Your reminder: ${task}` : "You have no reminders.";
}