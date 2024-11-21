// backend/src/interfaces/Employee.ts
import { Types } from 'mongoose';

export interface IEmployee {
    userId: Types.ObjectId | string;
    department: Types.ObjectId | string;
    fullName: string;
    position: string;
    hireDate: Date;
    salary: number;
    status: 'active' | 'inactive';
  }
  