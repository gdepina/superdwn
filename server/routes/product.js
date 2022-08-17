import express from 'express';
import Product from '../controllers/product';

const router = express.Router();

const prefix = '/api/products';
router.get(prefix, Product.list);
router.get(`${prefix}/:id`, Product.detail);
router.post(prefix, Product.create);
router.put(prefix, Product.update);
router.delete(prefix, Product.destroyAss);
router.get(`${prefix}/categories`, Product.categories);

export default router;
