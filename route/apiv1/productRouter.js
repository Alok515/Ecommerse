const express = require('express');
const { productGet, createProduct, deleteProduct, updateProduct} = require('../../controller/productHandler');
const router = express.Router();


router.route('/').get(productGet);
router.route('/create').post(createProduct);
router.route('/:id').delete(deleteProduct);
router.route('/:id/update_quantity').put(updateProduct);

module.exports = router;