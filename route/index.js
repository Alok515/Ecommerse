const express = require('express');
const productRouterV1 = require('./apiv1/index');
const router = express.Router();

router.use('/v1', productRouterV1);

module.exports = router;