import { Router } from 'express';
import { addDepartment, getDepartments, editDepartment } from '../controllers/departmentController';
import {auth} from '../middlewares/auth'
const router = Router();

router.post('/add', auth , addDepartment);
router.get('/', auth, getDepartments);
router.get('/:id',auth, editDepartment)

export default router;
