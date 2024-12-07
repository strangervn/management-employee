"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salaryController_1 = require("../controllers/salaryController");
const router = (0, express_1.Router)();
router.post('/', salaryController_1.createSalary);
router.get('/', salaryController_1.getSalaries);
exports.default = router;
