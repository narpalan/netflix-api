import { Request, Response } from "express";
import { ShowService } from '../services'
import HTTP_STATUS from '../enum/http-status.enum';
import { CustomResponse } from "../interface/custom-response.interface";
import BadRequestException from "../exceptions/bad-request.exception";

const showsService = new ShowService();

class ShowController {

  public static async list(req: Request, res: CustomResponse){    
    if('id' in req.query){       
      try{ 
        /*       
        let ids: string[] = [];                
        ids = (<string>req.query.id).split(',');              
        ids.forEach((numb) =>{
          let i = numb;
          ids.shift();
        });
        
        /*
        if(isNaN(id)){
          throw new BadRequestException('Erro ao receber id. Apenas um id pode ser processado pelo metodo.');
        }    
        */  
        let id;          
        id = req.query.id;
        const show = await showsService.find(Number(id));
        res.status(HTTP_STATUS.OK).json(show);
        return;
      } catch(e:any){
        //console.log(e);
        res.status(e.status).json(e.message);        
      }    
      
    }
    else{
      const shows = await showsService.find();
      res.status(HTTP_STATUS.OK).send(shows);
      return;
    }       
    
  }

  public static async create(req:Request, res:CustomResponse){
    try{
      const show = req.body;    
      const result = await showsService.create(show);
      res.status(HTTP_STATUS.CREATED).send(result); 

    }catch(e){
      res.errorHandler && res.errorHandler(e);
    }
       
  }

  public static async delete(req: Request, res: CustomResponse){
    try{
      const id = req.query.id;
      const result = await showsService.delete(Number(id));
      res.status(HTTP_STATUS.ACCEPTED).send(result);
    }catch(e: any){
      res.errorHandler && res.errorHandler(e);      
    }

  } 
}

export default ShowController;
