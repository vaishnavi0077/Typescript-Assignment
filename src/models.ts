export type Status = "todo" | "in-progress" | "done" | "cancelled";
 
export type Priority = "low" | "medium" | "high";

export interface Task {
    id : number;
    title : string;
    status : Status;
    priority : Priority;
    dueDate? : Date;
}

export type NewTask = Omit<Task, "id">;

export type TaskUpdate = Partial<Omit<Task, "id">>;

//part 4
export interface ReminderNotification {
  kind: "reminder";
  taskTitle: string;
  dueDate: Date;
}

export interface CompletedNotification {
  kind: "completed";
  taskTitle: string;
  completedAt: Date;
}

export interface OverdueNotification {
  kind: "overdue";
  taskTitle: string;
  daysLate: number;
}

export type TaskNotification = ReminderNotification | CompletedNotification | OverdueNotification;

//transition map
type EveryStatus<T extends Record<Status, Status>> = T;

export type Transitions = EveryStatus<{
  "todo": "in-progress" | "cancelled";
  "in-progress": "todo" | "done" | "cancelled";
  "done": never;
  "cancelled": never;
}>;