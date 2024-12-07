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
exports.getSalaries = exports.createSalary = void 0;
const salary_1 = __importDefault(require("../models/salary"));
// Tạo mới lương
const createSalary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salary = new salary_1.default(req.body);
        yield salary.save();
        res.status(201).json(salary);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createSalary = createSalary;
// Lấy danh sách lương
const getSalaries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salaries = yield salary_1.default.find().populate('employeeId');
        res.status(200).json(salaries);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSalaries = getSalaries;
