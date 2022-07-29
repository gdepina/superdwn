import express from 'express';
import auth from '../controllers/auth';
import User from '../controllers/user';


const router = express.Router();

router.post('/api/users', User.create);
router.post('/api/login', auth.login);
router.get('/api/users/:userName', User.find)

export default router;
