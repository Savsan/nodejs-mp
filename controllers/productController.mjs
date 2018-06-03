import productModel from '../models/productModel';

export default class ProductController {
    getAllProducts (req, res) {
        if (productModel.length) {
            res.status(200).json(productModel);
        } else {
            res.status(400).json({error: 'No users in database'});
        }
    }

    getProductById (req, res) {
        const id = +req.params.id;
        const result = productModel.filter((product) => {
            return product.id === id;
        });

        if (result.length) {
            res.status(200).json(result[0]);
        } else {
            res.status(400).json({error: 'No users with id: ' + id});
        }
    }

    getReviewsByProduct (req, res) {
        console.log(req.parsedCookies);
        const id = +req.params.id;
        const product = productModel.filter((product) => {
            return product.id === id;
        });
        let reviews = [];

        if (product.length) {
            reviews = product[0].reviews;
            if (reviews.length) {
                res.status(200).json(reviews);
            } else {
                res.status(400).json({error: 'No reviews yet'});
            }
        } else {
            res.status(400).json({error: 'No users with id: ' + id});
        }
    }
}