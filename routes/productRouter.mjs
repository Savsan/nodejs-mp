import express from 'express';
import { ProductController } from '../controllers';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/products', productController.getAllProducts);
productRouter.get('/products/:id', productController.getProductById);
productRouter.get('/products/:id/reviews', productController.getReviewsByProduct);
productRouter.post('/products', productController.addProduct);
productRouter.delete('/products/:id', productController.deleteProductById);

export default productRouter;
