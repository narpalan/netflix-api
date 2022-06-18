import { NextFunction, Request } from "express";
import HTTP_STATUS from "../enum/http-status.enum";
import HttpException from "../exceptions/http.exception";
import { CustomResponse } from "../interface/custom-response.interface";

export const errorHandlerMiddleware = (req: Request, res:CustomResponse, next:NextFunction) => {  
  res.errorHandler = (e:any)=>{
    if(e instanceof HttpException){
      res
        .status(e.status)
        .send({error:true, message: e.message, details: e})
    }else{
      res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error:true})
    }
  }
  next();
}

