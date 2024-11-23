// backend/src/interfaces/Task.ts
import { Types } from 'mongoose';

export interface ITask {
    title: string;
    description: string;
    assignedTo: Types.ObjectId | string;
    status: 'Not Started' | 'In Progress' | 'Completed';
    startDate: Date;
    dueDate: Date;
  }
  