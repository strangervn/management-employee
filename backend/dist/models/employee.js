"use strict";
// backend/src/models/Employee.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeeSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    department: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Department' },
    fullName: { type: String, required: true },
    position: { type: String, required: true },
    hireDate: { type: Date, default: Date.now },
    salary: { type: Number, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
}, { timestamps: true });
const Employee = (0, mongoose_1.model)('Employee', employeeSchema);
exports.default = Employee;
