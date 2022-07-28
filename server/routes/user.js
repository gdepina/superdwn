import express from 'express';
import auth from '../controllers/auth';
import UserController from '../controllers/user';


const router = express.Router();

router.post('/api/users', UserController.create);

router.post('/api/login',auth.login);

export default router;
