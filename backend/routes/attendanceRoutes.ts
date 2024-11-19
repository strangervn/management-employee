import { Router } from 'express';
import { clockIn, getAttendances } from '../controllers/attendanceController';

const router = Router();

router.post('/', clockIn);
router.get('/', getAttendances);

export default router;
