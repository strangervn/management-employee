"use strict";
// backend/src/models/Salary.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const salarySchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee', required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
    basicSalary: { type: Number, required: true },
    bonus: { type: Number, default: 0 },
    deductions: { type: Number, default: 0 },
    totalSalary: { type: Number, required: true }
}, { timestamps: true });
const Salary = (0, mongoose_1.model)('Salary', salarySchema);
exports.default = Salary;
