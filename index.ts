import "reflect-metadata";
import express from 'express';

import runDatabase from "./config/database/data-source";
import startRoutes from "./src/routers";

const app: express.Application = express();
const PORT = 3030;

runDatabase();
startRoutes(app);

app.listen(PORT, ()=>{
  console.log(`Servidor no endereço: http://localhost:${PORT}`)
})
