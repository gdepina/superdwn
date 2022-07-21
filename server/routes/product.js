var express = require('express');
import Product from '../controllers/product'

var router = express.Router();

router.get('/', Product.list);

module.exports = router;