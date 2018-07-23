import Product from "../models/productModel";

export default class ProductController {
    getAllProducts (req, res) {
        Product.find({}, function(err, products) {
            if (err) {
                res.status(500).send({error: err});
            }

            if (!products.length) {
                res.status(404).send({message: 'No products in the database.'});
            } else {
                res.status(200).json(products);
            }
        });
    }

    getProductById (req, res) {
        const id = req.params.id;

        Product.findById(id, function(err, product) {
            if (err) {
                res.status(500).send({error: err});
            } else {
                res.status(200).json([product]);
            }
        });
    }

    getReviewsByProduct (req, res) {
        const id = req.params.id;
        let reviews = [];

        Product.findById(id, function(err, product) {
            if (err) {
                res.status(500).send({error: err});
            }

            if (!product) {
                res.status(404).send({message: `No product with ID: ${id} in the database.`});
            } else {
                reviews = product._doc.reviews;

                if (reviews.length) {
                    res.status(200).json(reviews);
                } else {
                    res.status(404).json({Message: 'No reviews yet'});
                }
            }

        });
    }

    addProduct (req, res) {
        const data = {
            ...req.body
        };

        Product.create(data, function (err, product) {
            if (err) {
                res.status(500).send({error: err});
            } else {
                console.log(`Product ${product.name} has been added to database.`);
                res.status(200).json([product]);
            }
        });
    }

    deleteProductById (req, res) {
        const id = req.params.id;

        Product.findOneAndDelete(id, function(err, product) {
            if (err) {
                res.status(500).send({error: err});
            } else {
                if (!product) {
                    res.status(404).json({message: `Product with id: ${id} doesn't exists in the database.`});
                } else {
                    console.log(`Product: ${product.name} has been deleted from the database.`)
                    res.status(200).json([product]);
                }
            }
        });
    }
}