import express from "express";
import passport from "passport";

import { ShowController } from "../controllers";
import { validationMidlwr } from "../middlewares";
import createShowSchema from "../schemas/create-show.schema";

const showsRouter = express.Router();

showsRouter.get('/shows', passport.authenticate('jwt', {session:false}), ShowController.list);
showsRouter.get('/shows/:id', passport.authenticate('jwt', {session:false}), ShowController.listOne);
showsRouter.post('/shows', passport.authenticate('jwt',{session:false}), validationMidlwr(createShowSchema), ShowController.create);
showsRouter.delete('/shows/:id', passport.authenticate('jwt',{session:false}), ShowController.delete);

export default showsRouter;
