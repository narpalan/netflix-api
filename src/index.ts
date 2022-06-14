import express, { NextFunction, Request, Response } from 'express';
import morgan from "morgan";
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type:'mysql',
  host:'localhost',
  port:3306,
  username:'root',
  password:'abcbanana',
  database:'netflix'
})

AppDataSource.initialize()
  .then(()=>{
    
  })
const app: express.Application = express();

const jsonParserMidwr = express.json();

app.use(jsonParserMidwr);
app.use(morgan('tiny'));

const loggerMidwr = (request: Request, response: Response, next:NextFunction) =>{
  console.log(`${new Date()} - ${request.url} - ${request.query} - ${request.params}`);
  next();
}
const PORT = 3030;
app.get('/ping', loggerMidwr, (request, response) => {  
  response.send('pong');
});

app.listen(PORT, ()=>{
  console.log(`Servidor no endereço: http://localhost:${PORT}`)
})
