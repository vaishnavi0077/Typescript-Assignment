import { TaskNotification } from "./models";

export function formatNotification(notification: TaskNotification): string {
  switch (notification.kind) {
    case "reminder":
      return `Reminder: "${notification.taskTitle}" is due on ${notification.dueDate.toDateString()}`;
    case "completed":
      return `Completed: "${notification.taskTitle}" was finished on ${notification.completedAt.toDateString()}`;
    case "overdue":
      return `Overdue: "${notification.taskTitle}" is ${notification.daysLate} day(s) late`;
  }
}