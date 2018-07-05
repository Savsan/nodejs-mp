import express from 'express';
import { CityController } from '../controllers';

const cityRouter = express.Router();
const cityController = new CityController();

cityRouter.get('/cities', (req, res) => cityController.getRandomCity(req, res));

export default cityRouter;