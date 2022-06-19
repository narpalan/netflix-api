import express, { Application } from "express";
import morgan from "morgan";

import authRouter from './auth.router';
import episodesRouter from './episode.router';
import listRouter from './list.router';
import showsRouter from './shows.router';
import userRouter from './user.router';
import { errorHandlerMidlwr } from "../middlewares";


const routes = [
  showsRouter,
  authRouter,
  userRouter,
  episodesRouter,
  listRouter
]

const jsonParserMidlwr = express.json();

function startRoutes(app: Application){
  app.use(jsonParserMidlwr);
  app.use(morgan('tiny'));
  app.use(errorHandlerMidlwr);  
  
  app.use(routes);
}

export default startRoutes;
