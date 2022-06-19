import "dotenv/config"
import "reflect-metadata";
import express from 'express';
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import passport from "passport";


import runDatabase from "./config/database/data-source";
import startRoutes from "./src/routers";
const app: express.Application = express();

const PORT = process.env.PORT || 3300;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET 
}

const strategy = new JwtStrategy(opts, function(payload, done){  
  return done(null, {});
})

passport.use(strategy);


runDatabase();
startRoutes(app);

app.listen(PORT, ()=>{
  console.log(`Servidor no endereço: http://localhost:${PORT}`)
})
