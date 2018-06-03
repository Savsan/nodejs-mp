export default class ProductController {
    getAllProducts (req, res) {
        console.log(req.parsedQuery);
        res.send('get all of the products');
    }
}