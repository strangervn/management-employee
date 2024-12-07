"use strict";
// backend/src/models/Department.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const departmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    employees: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee' }]
}, { timestamps: true });
const Department = (0, mongoose_1.model)('Department', departmentSchema);
exports.default = Department;
