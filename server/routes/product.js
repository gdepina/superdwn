
import express from "express";
import Product from '../controllers/product'
import isLogged from '../middleware/auth'

const router = express.Router();

const prefix = '/api/products'

//ruta de prueba con el middleware isLogged implementado
router.get(prefix, isLogged, Product.list);

router.post(prefix, Product.create);
router.put(prefix, Product.update);
router.delete(prefix, Product.destroyAss);

export default router