import express from 'express';
const router = express.Router();
import {
  allUsers,
  loginUser,
  registerUser,
} from '../Controllers/userController.js';
// router.route('/').post(registerUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', allUsers);
export default router;
