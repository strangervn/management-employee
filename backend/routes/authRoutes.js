import express from 'express'
import { login, verify } from '../controllers/authController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/login', login)
router.get('/verify', auth, verify)

export default router;