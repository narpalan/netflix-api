import express, { Application } from "express";
import morgan from "morgan";
import passport from "passport";
import { errorHandlerMiddleware } from "../middlewares/error-handler.middleware";

import ShowsRouter from "./shows.router";
import UserRouter from "./user.router";

const routes = [
  ShowsRouter,
  AuthRouter,
  UserRouter
]

const jsonParserMidwr = express.json();

function startRoutes(app: Application){
  app.use(jsonParserMidwr);
  app.use(morgan('tiny'));
  app.use(errorHandlerMiddleware);  
  
  app.use(routes);
}

export default startRoutes;
