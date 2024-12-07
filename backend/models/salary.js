// backend/src/models/Salary.ts

import { Schema, model, Document } from 'mongoose';
import { ISalary } from '../interfaces/salary';

const salarySchema = new Schema<ISalary>(
  {
    employeeId: { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    basicSalary: { type: Number, required: true },
    bonus: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    totalSalary: { type: Number, required: true }
  },
  { timestamps: true }
);

const Salary = model<ISalary>('Salary', salarySchema);
export default Salary;
