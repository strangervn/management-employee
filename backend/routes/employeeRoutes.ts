import express from 'express';
import { getEmployees, createEmployee } from '../controllers/employeeController';
import { protect } from '../middlewares/auth';

const router = express.Router();

router.get('/', protect, getEmployees);
router.post('/', protect, createEmployee);

export default router;
