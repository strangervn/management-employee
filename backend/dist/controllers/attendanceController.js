"use strict";
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
exports.getAttendances = exports.clockIn = void 0;
const attendance_1 = __importDefault(require("../models/attendance"));
// Đăng ký chấm công
const clockIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attendance = new attendance_1.default(req.body);
        yield attendance.save();
        res.status(201).json(attendance);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.clockIn = clockIn;
// Lấy danh sách chấm công
const getAttendances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attendances = yield attendance_1.default.find().populate('employeeId');
        res.status(200).json(attendances);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getAttendances = getAttendances;
