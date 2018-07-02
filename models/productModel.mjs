import db from '../database';
import Sequelize from 'sequelize';

const Product = db.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    brand: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    options: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        get: function() {
            return this.getDataValue('options').map((obj) => JSON.parse(obj));
        },
        set: function(arr) {
            const data = Array.isArray(arr) ? arr : [];

            return this.setDataValue('options', data.map((obj) => JSON.stringify(obj)));
        }
    },
    reviews: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        get: function() {
            const arr = this.getDataValue('reviews');

            return this.getDataValue('reviews').map((obj) => JSON.parse(obj));
        },
        set: function(arr) {
            const data = Array.isArray(arr) ? arr : [];

            return this.setDataValue('reviews', data.map((obj) => JSON.stringify(obj)));
        }
    }
});

Product.sync({force: true}).then(() => {
    return Product.create({
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
    });
});

Product.sync({force: true}).then(() => {
    return Product.create({
        name: 'Supreme T-Shirt V2',
        brand: 'Supreme',
        price: 199.99,
        options: [
            {color: 'white'},
            {size: 'XXL'}
        ],
        reviews: []
    });
});

export default Product;
