import express from 'express';
const router = express.Router();
import {
  allUsers,
  loginUser,
  registerUser,
} from '../Controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
// router.route('/').post(registerUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, allUsers);
export default router;
