import express from 'express';
import Auth from '../controllers/auth';
import User from '../controllers/user';


const router = express.Router();

router.post('/api/user', User.create);
router.post('/api/login', Auth.login);
router.get('/api/user/profile/', Auth.isLogged, User.find)
router.get('/api/user/profile/:userName', Auth.isLogged, User.find)

export default router;
