import express from 'express';
import { login, register } from '../Controllers/userController.js';
// import { verifyToken } from '../Middleware/authJWT.js';

const router = express.Router();

/**register router */
router.post('/register', register);
router.post('/login', login);

/** export the sub router */
const userRouters = router;
export default userRouters;