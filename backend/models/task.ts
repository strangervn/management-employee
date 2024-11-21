// backend/src/models/Task.ts

import { Schema, model, Document } from 'mongoose';
import { ITask } from '../interfaces/task';

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Employee' },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], required: true },
    startDate: { type: Date, default: Date.now },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const Task = model<ITask>('Task', taskSchema);
export default Task;
