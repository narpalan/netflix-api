import express from 'express';
import { UserController } from '../controllers';
import validationMiddleware from '../middlewares/validation.middleware';
import createUserSchema from '../schemas/create-user.schema';

const UserRouter = express.Router();

UserRouter.post('/user', validationMiddleware(createUserSchema),  UserController.create);

export default UserRouter;
