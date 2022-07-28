
import express from "express";
import Product from '../controllers/product'
import auth from '../controllers/auth'

const router = express.Router();

const prefix = '/api/products'
const categories = prefix+'/categories'

//ruta de prueba con el middleware isLogged implementado
router.get(prefix, auth.isLogged, Product.list);

router.post(prefix, Product.create);
router.put(prefix, Product.update);
router.delete(prefix, Product.destroyAss);
router.get(categories, Product.categories);

export default router