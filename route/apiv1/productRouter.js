const express = require('express');
const { productGet, createProduct, deleteProduct, updateProduct} = require('../../controller/productHandler');
const router = express.Router();

//route for get products
router.route('/').get(productGet);

//route for create products
router.route('/create').post(createProduct);

//route for delete products
router.route('/:id').delete(deleteProduct);

//route for update products
router.route('/:id/update_quantity').put(updateProduct);

module.exports = router;