import express from 'express';
import { register, login, verify } from '../controllers/authController';
import auth from '../middlewares/auth'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify', auth, verify);


export default router;
