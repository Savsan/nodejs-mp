import express from 'express';
import { UserController } from '../controllers';

const userRouter = express.Router();
const userController = new UserController();

userRouter.get('/users', userController.getAllUsers);
userRouter.delete('/users/:id', userController.deleteUserById);

export default userRouter;
