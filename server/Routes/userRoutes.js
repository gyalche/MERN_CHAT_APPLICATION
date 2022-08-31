import express from 'express';
const router = express.Router();
import { loginUser, registerUser } from '../Controllers/userController.js';
// router.route('/').post(registerUser);
router.post('/', registerUser);
router.post('/login', loginUser);

export default router;
