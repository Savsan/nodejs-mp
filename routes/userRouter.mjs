import express from 'express';
import { UserController } from '../controllers';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/users', (req, res) => userController.getAllUsers(req, res));

export default userRouter;