import Salary from '../models/salary';
import { Request, Response } from 'express';

// Tạo mới lương
export const createSalary = async (req: Request, res: Response) => {
  try {
    const salary = new Salary(req.body);
    await salary.save();
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy danh sách lương
export const getSalaries = async (req: Request, res: Response) => {
  try {
    const salaries = await Salary.find().populate('employeeId');
    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
