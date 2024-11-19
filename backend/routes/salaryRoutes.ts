import { Router } from 'express';
import { createSalary, getSalaries } from '../controllers/salaryController';

const router = Router();

router.post('/', createSalary);
router.get('/', getSalaries);

export default router;
