const Product = require('../models/productSchema');

const productGet = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const productFromReq = req.body;
        await Product.findOne({name: productFromReq.name})
            .then(async product => {
                if (product) {
                    return res.status(400).json({message: 'Product already exists'});
                }
                else {
                    const productVal = new Product(productFromReq);
                    await productVal.save();
                    return res.status(201).json(productVal);
                }
            })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}



module.exports = {
    productGet,
    createProduct,
}