import { NextFunction, Request } from "express";

import { HTTPSTATS } from "../enum";
import { HttpException } from "../exceptions";
import { CustomResponse } from "../interfaces";

const errorHandlerMiddleware = (req: Request, res:CustomResponse, next:NextFunction) => {  
  res.errorHandler = (e:any)=>{
    if(e instanceof HttpException){
      res
        .status(e.status)
        .send({error:true, message: e.message, details: e})
    }else{      
      res.status(HTTPSTATS.INTERNAL_SERVER_ERROR).json({error:true, msg: e.message})
    }
  }
  next();
}

export default errorHandlerMiddleware;
