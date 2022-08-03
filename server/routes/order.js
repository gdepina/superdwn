import express from "express";
import Order from '../controllers/order'
import Auth from '../controllers/auth'


const router = express.Router();

router.post('/api/order', Auth.isLogged, Order.create);
router.get('/api/order', Auth.isLogged, Order.list);
router.get('/api/order/:id', Auth.isLogged, Order.detail);

export default router