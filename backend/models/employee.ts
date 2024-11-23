// backend/src/models/Employee.ts

import { Schema, model, Document } from 'mongoose';
import { IEmployee } from '../interfaces/employee';

const employeeSchema = new Schema<IEmployee>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    hireDate: { type: Date, default: Date.now },
    salary: { type: Number, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
   
  },
  { timestamps: true }
);

const Employee = model<IEmployee>('Employee', employeeSchema);
export default Employee;
