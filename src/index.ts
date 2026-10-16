import { Repository } from "./repository";
import { fetchTasks } from "./api";
import { formatNotification } from "./notifications";
import { Task, NewTask, TaskUpdate, TaskNotification } from "./models";

function printTasks(title: string, tasks: Task[]): void {
  console.log(`\n--- ${title} ---`);
  if (tasks.length === 0) {
    console.log("(none)");
    return;
  }
  for (const task of tasks) {
    console.log(`#${task.id} ${task.title} [${task.status}] (${task.priority})`);
  }
}

async function main(): Promise<void> {
  const repo = new Repository<Task>();

  try {
    const fetched = await fetchTasks();
    for (const task of fetched) {
      const { id, ...data } = task;
      repo.add(data);
    }
    printTasks("Loaded tasks", repo.filter(() => true));


    const input: NewTask = { title: "Submit assignment", status: "todo", priority: "high" };
    const created = repo.add(input);
    printTasks("After creating", repo.filter(() => true));


    const changes: TaskUpdate = { status: "done" };
    const updated = repo.update(created.id, changes);
    if (updated) {
      console.log(`\nUpdated task #${updated.id} to "${updated.status}"`);
    }


    printTasks("Tasks with status 'todo'", repo.filter((t) => t.status === "todo"));


    const removed = repo.remove(1);
    console.log(`\nRemoved task #1: ${removed}`);
    printTasks("After removing", repo.filter(() => true));

    
    const notifications: TaskNotification[] = [
      { kind: "reminder", taskTitle: "Write README", dueDate: new Date("2026-10-20") },
      { kind: "completed", taskTitle: "Submit assignment", completedAt: new Date() },
      { kind: "overdue", taskTitle: "Practice generics", daysLate: 2 },
    ];
    console.log("\n--- Notifications ---");
    for (const n of notifications) {
      console.log(formatNotification(n));
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Something went wrong:", error.message);
    } else {
      console.error("Something went wrong");
    }
  }
}

main();