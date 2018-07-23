import express from 'express';
import { CityController } from '../controllers';

const cityRouter = express.Router();
const cityController = new CityController();

cityRouter.get('/cities', cityController.getRandomCity);
cityRouter.post('/cities', cityController.addCity);
cityRouter.put('/cities/:id', cityController.updateCityById);
cityRouter.delete('/cities/:id', cityController.deleteCityById);

export default cityRouter;
