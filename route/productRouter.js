const express = require('express');
const { productGet, createProduct } = require('../controller/productHandler');
const router = express.Router();


router.route('/').get(productGet);
router.route('/create').post(createProduct);

module.exports = router;