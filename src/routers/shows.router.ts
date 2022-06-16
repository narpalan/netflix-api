import express from "express";
import { ShowController } from "../controllers";
import validationMiddleware from "../middlewares/validation.middleware";
import createShowSchema from "../schemas/create-show.schema";

const ShowsRouter = express.Router();

ShowsRouter.get('/shows', ShowController.list);
ShowsRouter.delete('/shows', ShowController.delete);
ShowsRouter.post('/shows', validationMiddleware(createShowSchema), ShowController.create);

export default ShowsRouter;
