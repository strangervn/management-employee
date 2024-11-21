// backend/src/interfaces/Task.ts

export interface ITask {
    title: string;
    description: string;
    assignedTo: string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    startDate: Date;
    dueDate: Date;
  }
  