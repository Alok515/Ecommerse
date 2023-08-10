const mongoose = require('mongoose');


//schema for the product
const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;