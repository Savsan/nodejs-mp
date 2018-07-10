import mongoose from 'mongoose';
import productData from "../config/mock-data/productData";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    options: [],
    reviews: [],
    created_on: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Products', ProductSchema);

productData.map((product) => Product.create(product, function (err, product) {
    if (err) {
        console.trace(err);
    } else {
        console.log(`Product ${product.name} has been added to database.`);
    }
}));

export default Product;
