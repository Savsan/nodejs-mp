import Product from "../models/productModel";

export default class ProductController {
    getAllProducts (req, res) {
        Product.findAll()
            .then((products) => {
                if (products.length) {
                    res.status(200).json(products);
                } else {
                    res.status(400).json({error: 'No products in database'});
                }
            })
            .catch((err) =>{
                res.status(400).json({error: err});
            });
    }

    getProductById (req, res) {
        const id = +req.params.id;

        Product.findAll({where: {id: id}})
            .then((products) => {
                if (products.length) {
                    res.status(200).json(products[0]);
                } else {
                    res.status(400).json({error: `Product with id: ${id} is not exists.`});
                }
            })
            .catch((err) =>{
                res.status(400).json({error: err});
            });
    }

    getReviewsByProduct (req, res) {
        const id = +req.params.id;
        let reviews = [];

        Product.findAll({where: {id: id}})
            .then((products) => {
                if (products.length) {
                    reviews = products[0].reviews;
                    if (reviews.length) {
                        res.status(200).json(reviews);
                    } else {
                        res.status(400).json({error: 'No reviews yet'});
                    }
                } else {
                    res.status(400).json({error: `Product with id: ${id} is not exists.`});
                }
            })
            .catch((err) =>{
                res.status(400).json({error: err});
            });
    }

    addProduct (req, res) {
        const data = {
            ...req.body
        };

        Product.sync({force: false})
            .then(() => {
                return Product.create(data);
            })
            .then((product) => {
                console.log(JSON.stringify(product));
                res.status(200).json(product);
            }).catch((error) => {
                res.status(400).json({error: error});
            });
    }
}