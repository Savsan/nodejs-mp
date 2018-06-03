import express from 'express';
import { ProductController } from '../controllers';

const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/', (req, res) => productController.getAllProducts(req, res));

export default productRouter;