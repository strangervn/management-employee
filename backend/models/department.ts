// backend/src/models/Department.ts

import { Schema, model, Document } from 'mongoose';
import { IDepartment } from '../interfaces/department';

const departmentSchema = new Schema<IDepartment>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
   
  },
  { timestamps: true }
);

const Department = model<IDepartment>('Department', departmentSchema);
export default Department;
