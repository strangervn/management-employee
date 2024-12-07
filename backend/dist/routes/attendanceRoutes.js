"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attendanceController_1 = require("../controllers/attendanceController");
const router = (0, express_1.Router)();
router.post('/', attendanceController_1.clockIn);
router.get('/', attendanceController_1.getAttendances);
exports.default = router;
