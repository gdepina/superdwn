import express from 'express';
import UserController from '../controllers/user';


const router = express.Router();

router.post('/api/users', UserController.create);


export default router;
