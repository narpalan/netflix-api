import express from 'express';

import { UserController } from '../controllers';
import { validationMidlwr } from '../middlewares';
import createUserSchema from '../schemas/create-user.schema';

const userRouter = express.Router();

userRouter.post('/user', validationMidlwr(createUserSchema),  UserController.create);

export default userRouter;
