import express from 'express';
import { CityController } from '../controllers';

const cityRouter = express.Router();
const cityController = new CityController();

cityRouter.get('/cities', (req, res) => cityController.getRandomCity(req, res));
cityRouter.post('/cities', (req, res) => cityController.addCity(req, res));
cityRouter.put('/cities/:id', (req, res) => cityController.updateCityById(req, res));
cityRouter.delete('/cities/:id', (req, res) => cityController.deleteCityById(req, res));

export default cityRouter;