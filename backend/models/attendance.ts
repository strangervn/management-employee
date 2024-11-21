// backend/src/models/Attendance.ts

import mongoose, { Schema, model } from 'mongoose';
import { IAttendance } from '../interfaces/attendance';

const attendanceSchema = new Schema<IAttendance>(
  {
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    date: { type: Date, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date },
    status: { type: String, enum: ['Present', 'Absent', 'Late', 'Leave'], required: true },
    
  },
  { timestamps: true }
);
attendanceSchema.set('toJSON', {
  transform: (_, ret) => {
    ret.id = ret._id.toString(); // Add `id` field
    ret.employeeId = ret.employeeId?.toString(); // Convert `ObjectId` to string
    delete ret._id; // Remove internal `_id`
    delete ret.__v; // Remove internal `__v`
    return ret;
  },
});
const Attendance = model<IAttendance>('Attendance', attendanceSchema);
export default Attendance;
