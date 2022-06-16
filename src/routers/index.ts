import express, { Application } from "express";
import morgan from "morgan";
import errorHandler from "../middlewares/error-handler.middleware";

import ShowsRouter from "./shows.router";

const routes = [
  ShowsRouter
]

const jsonParserMidwr = express.json();

function startRoutes(app: Application){
  app.use(jsonParserMidwr);
  app.use(morgan('tiny'));
  app.use(errorHandler);
  
  app.use(routes);
}

export default startRoutes;
