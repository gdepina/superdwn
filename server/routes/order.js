import express from 'express';
import Order from '../controllers/order';


const router = express.Router();

router.post('/api/order', Order.create);


export default router;