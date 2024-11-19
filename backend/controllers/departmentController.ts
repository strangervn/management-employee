import Department from '../models/department';
import { Request, Response } from 'express';

// Tạo mới phòng ban
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy danh sách phòng ban
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await Department.find().populate('employees');
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
