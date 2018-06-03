import express from 'express';
import { ProductController } from '../controllers';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/products', (req, res) => productController.getAllProducts(req, res));
productRouter.get('/products/:id', (req, res) => productController.getProductById(req, res));
productRouter.get('/products/:id/reviews', (req, res) => productController.getReviewsByProduct(req, res));

export default productRouter;