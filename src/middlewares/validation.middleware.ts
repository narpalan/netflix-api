import { NextFunction, Request } from "express";
import { Schema } from "joi";
import { HTTPSTATS } from "../enum";

import { ValidationException } from "../exceptions";
import { CustomResponse } from "../interfaces";

const validationMiddleware = (schema: Schema) => async (req: Request, res: CustomResponse, next:NextFunction) => {
  try{
    const validated = await schema.validateAsync(req.body, {abortEarly: false});
 
    if(validated.error){      
      throw new ValidationException('Campos inválidos', validated.error.details);
    }    
    next();    
  }catch(e:any){
    //res.status(HTTPSTATS.BAD_REQUEST).json(e.message);
    res.errorHandler && res.errorHandler(e);      
    
      
  }   
}

export default validationMiddleware;
