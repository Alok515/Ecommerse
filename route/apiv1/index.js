const router = require('express').Router();
const productRouter = require('./productRouter');

//route for products
router.use('/products', productRouter);

module.exports = router;