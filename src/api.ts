import { Task } from "./models";

export function fetchTasks(): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks: Task[] = [
        { id: 1, title: "Learn interfaces", status: "done", priority: "high" },
        { id: 2, title: "Practice generics", status: "in-progress", priority: "medium" },
        { id: 3, title: "Write README", status: "todo", priority: "low", dueDate: new Date("2026-10-20") },
      ];
      resolve(tasks);
    }, 1000);
  });
}