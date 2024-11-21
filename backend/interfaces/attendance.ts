// backend/src/interfaces/Attendance.ts
import { Types } from 'mongoose';

export interface IAttendance {
    employeeId: Types.ObjectId | string;
    date: Date;
    checkIn: Date;
    checkOut?: Date;
    status: 'Present' | 'Absent' | 'Late' | 'Leave';
    createdAt?: Date;
    updatedAt?: Date;
  }
  