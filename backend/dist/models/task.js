"use strict";
// backend/src/models/Task.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    assignedTo: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' },
    status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], required: true },
    startDate: { type: Date, default: Date.now },
    dueDate: { type: Date }
}, { timestamps: true });
const Task = (0, mongoose_1.model)('Task', taskSchema);
exports.default = Task;
