const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, {
            'uz': 'Please include the product name',
            'en': 'Please include the product name',
            'ru': 'Please include the product name',
        }],
    },
    price: {
        type: String,
        required: [true, {
            'uz': 'Please include the product price',
            'en': 'Please include the product price',
            'ru': 'Please include the product price',
        }],
    },
    image: {
        type: String,
        required: true,
    },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;