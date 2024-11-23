// backend/src/controllers/TaskController.ts

import { Request, Response } from 'express';
import Task from '../models/task';

// Tạo công việc mới
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, assignedTo, status, startDate, dueDate } = req.body;
    const newTask = new Task({ title, description, assignedTo, status, startDate, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lấy danh sách công việc
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().populate('assignedTo');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lấy công việc theo ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).populate('assignedTo');
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cập nhật công việc
export const updateTask = async (req: Request, res: Response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xóa công việc
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
