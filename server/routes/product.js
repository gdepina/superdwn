import express from "express";
import Product from '../controllers/product'
import auth from '../controllers/auth'


const router = express.Router();

const prefix = '/api/products'
router.get(prefix, Product.list);
router.post(prefix, Product.create);
router.put(prefix, Product.update);
router.delete(prefix, Product.destroyAss);
router.get(prefix + '/categories', Product.categories);


export default router