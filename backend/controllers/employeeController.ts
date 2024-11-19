import Employee from '../models/employee';
import { Request, Response } from 'express';

// Tạo mới nhân viên
export const createEmployee = async (req: Request, res: Response) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy danh sách nhân viên
export const getEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin nhân viên
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa nhân viên
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Employee.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
