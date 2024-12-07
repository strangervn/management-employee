"use strict";
// backend/src/controllers/TaskController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTaskById = exports.getTasks = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
// Tạo công việc mới
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, assignedTo, status, startDate, dueDate } = req.body;
        const newTask = new task_1.default({ title, description, assignedTo, status, startDate, dueDate });
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createTask = createTask;
// Lấy danh sách công việc
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield task_1.default.find().populate('assignedTo');
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getTasks = getTasks;
// Lấy công việc theo ID
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findById(req.params.id).populate('assignedTo');
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getTaskById = getTaskById;
// Cập nhật công việc
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTask = yield task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(updatedTask);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateTask = updateTask;
// Xóa công việc
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTask = yield task_1.default.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.deleteTask = deleteTask;
