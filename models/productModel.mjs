import mongoose from 'mongoose';

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

Product.create({
    name: 'Supreme T-Shirt',
    brand: 'Supreme',
    price: 99.99,
    options: [
        { color: 'blue' },
        { size: 'XL' }
    ],
    reviews: [
        {
            name: 'Alex',
            review: 'Good product!!!'
        },
        {
            name: 'Nick',
            review: 'Awesome!!!'
        },
    ]
}, function (err, product) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Product ${product.name} has been added to database.`)
    }
});

Product.create({
    name: 'Supreme T-Shirt V2',
    brand: 'Supreme',
    price: 199.99,
    options: [
        { color: 'red' },
        { size: 'M' }
    ],
    reviews: [
        {
            name: 'Helen',
            review: 'Very nice!!'
        }
    ]
}, function (err, product) {
    if (err) {
        console.error(err);
    } else {
        console.log(`Product ${product.name} has been added to database.`)
    }
});

export default Product;
