// controllers/taskController.js
const Task = require('../models/Task');

// Tạo công việc mới
const createTask = async (req, res) => {
  const { title, description, assignedTo, dueDate } = req.body;

  const task = new Task({
    title,
    description,
    assignedTo,
    dueDate,
  });

  try {
    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task', error });
  }
};

// Lấy danh sách công việc của nhân viên trong ngày
const getTasksForEmployee = async (req, res) => {
  const { employeeId } = req.params;
  const today = new Date().toISOString().slice(0, 10); // Lấy ngày hiện tại

  try {
    const tasks = await Task.find({
      assignedTo: employeeId,
      dueDate: today,
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch tasks', error });
  }
};

module.exports = { createTask, getTasksForEmployee };
