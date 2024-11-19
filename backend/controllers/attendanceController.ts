import Attendance from '../models/attendance';
import { Request, Response } from 'express';

// Đăng ký chấm công
export const clockIn = async (req: Request, res: Response) => {
  try {
    const attendance = new Attendance(req.body);
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy danh sách chấm công
export const getAttendances = async (req: Request, res: Response) => {
  try {
    const attendances = await Attendance.find().populate('employeeId');
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
