const Product = require('../models/productSchema');

//GET HANDLER METHOD
const productGet = async (req, res) => {
    try {
        //Get Product FROM DATABASE USING FIND method in mongoose
        const products = await Product.find();
        //sending the response back to user
        res.status(200).json({data: {products: products}});
    } catch (error) {
        //error handling
        res.status(500).json({data: {message: error.message}});
    }
}

const createProduct = async (req, res) => {
    try {
        //extracting the data from the request
        const productFromReq = req.body;
        //checking if the product already exists
        await Product.findOne({name: productFromReq.name})
            .then(async product => {
                //if the product already exists then sends a response that product already exists
                if (product) {
                    return res.status(400).json({data: {message: 'Product already exists'}});
                }
                else {
                    // else creates a new product in the database
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
        //extracting the id from url using params
        const id = req.params.id;
        //deleting the product from the database
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (deletedProduct) {
            //response if product is deleted successfully
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
        //extracting the id from url using params
        const id = req.params.id;
        //extracting the data from the request query
        const quantityToUpdate = req.query.number;
        //converting the quantity to integer
        const quantityToUpdateInt = parseInt(quantityToUpdate, 10);
        //finding the product to be updated
        const productToUpdate = await Product.findById(id);
        if (productToUpdate) {
            //updating the product
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