"use strict";
// backend/src/models/Attendance.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const attendanceSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Employee', required: true },
    date: { type: Date, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date },
    status: { type: String, enum: ['Present', 'Absent', 'Late', 'Leave'], required: true },
}, { timestamps: true });
attendanceSchema.set('toJSON', {
    transform: (_, ret) => {
        var _a;
        ret.id = ret._id.toString(); // Add `id` field
        ret.employeeId = (_a = ret.employeeId) === null || _a === void 0 ? void 0 : _a.toString(); // Convert `ObjectId` to string
        delete ret._id; // Remove internal `_id`
        delete ret.__v; // Remove internal `__v`
        return ret;
    },
});
const Attendance = (0, mongoose_1.model)('Attendance', attendanceSchema);
exports.default = Attendance;
