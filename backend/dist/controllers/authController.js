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
exports.login = exports.register = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Register user
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = yield user_1.default.findOne({ username });
        if (existingUser) {
            res.status(400).json({ message: 'Username already exists' });
            return;
        }
        // Hash the password before saving
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10); // 10 is the salt rounds
        const user = new user_1.default({ username, password: hashedPassword });
        yield user.save();
        res.status(201).json({ message: 'User registered successfully' });
        return;
    }
    catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
});
exports.register = register;
// Login user
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = yield user_1.default.findOne({ username });
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Compare the provided password with the stored hash
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
        return;
    }
    catch (error) {
        res.status(500).json({ message: error.message });
        return;
    }
});
exports.login = login;
