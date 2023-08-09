const mongoose = require('mongoose');

const counterSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    seq: {
        type: Number,
        required: true,
        default: 0
    }
});

const Counter = mongoose.model('Counter', counterSchema);

const generateCount = async () => {
    const count = await Counter.findOneAndUpdate({ _id: 'productId' }, { $inc: { seq: 1 } }, { new: true });
    
    return count.seq;
}

const productSchema = mongoose.Schema({

    id : {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

productSchema.pre('save', async (next) => {
    try {
        const doc = this;
        const count = await generateCount('productId');
        console.log(count);
        this.id = count;
        next();
    } catch (error) {
        return next(error);
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;