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
exports.getDepartments = exports.createDepartment = void 0;
const department_1 = __importDefault(require("../models/department"));
// Tạo mới phòng ban
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const department = new department_1.default(req.body);
        yield department.save();
        res.status(201).json(department);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createDepartment = createDepartment;
// Lấy danh sách phòng ban
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield department_1.default.find().populate('employees');
        res.status(200).json(departments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getDepartments = getDepartments;
