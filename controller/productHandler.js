const Product = require('../models/productSchema');

const productGet = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({data: {products: products}});
    } catch (error) {
        res.status(500).json({data: {message: error.message}});
    }
}

const createProduct = async (req, res) => {
    try {
        const productFromReq = req.body;
        await Product.findOne({name: productFromReq.name})
            .then(async product => {
                if (product) {
                    return res.status(400).json({data: {message: 'Product already exists'}});
                }
                else {
                    const productVal = new Product(productFromReq);
                    await productVal.save();
                    return res.status(201).json({data: productVal});
                }
            })
    } catch (error) {
        res.status(500).json({data: {message: error.message}});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (deletedProduct) {
            return res.status(200).json({data: {message: 'Product deleted'}});
        }
        else {
            return res.status(400).json({data: {message: 'Product not found with that id'}});
        }
    } catch (error) {
        res.status(500).json({data: {message: error.message}});
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const quantityToUpdate = req.query.number;
        const quantityToUpdateInt = parseInt(quantityToUpdate, 10);
        const productToUpdate = await Product.findById(id);
        if (productToUpdate) {
            productToUpdate.quantity += quantityToUpdateInt;
            await productToUpdate.save();
            return res.status(200).json({data: {product: productToUpdate, message: 'updated successfully'}});
        }
        else {
            return res.status(400).json({data: {message: 'Product not found with that id'}});
        }
    } catch (error) {
        res.status(500).json({data: {message: error.message}});
    }
}

module.exports = {
    productGet,
    createProduct,
    deleteProduct,
    updateProduct,
}