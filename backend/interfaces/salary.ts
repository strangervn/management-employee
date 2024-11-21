// backend/src/interfaces/Salary.ts
import { Types } from 'mongoose';

export interface ISalary {
    employeeId: Types.ObjectId | string;
    month: string;
    year: number;
    basicSalary: number;
    bonus: number;
    deductions: number;
    totalSalary: number;
  }
  