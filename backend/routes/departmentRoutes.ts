import { Router } from 'express';
import { createDepartment, getDepartments } from '../controllers/departmentController';

const router = Router();

router.post('/', createDepartment);
router.get('/', getDepartments);

export default router;
