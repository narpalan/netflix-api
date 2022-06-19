import { Request } from "express";
import { ShowService } from '../services'
import { HTTPSTATS } from "../enum";
import { CustomResponse } from "../interfaces";

const showService = new ShowService();

class ShowController {

  public static async list(req: Request, res: CustomResponse){
    try{
      const shows = await showService.list();
      res.json(shows)
    }catch(e:any){
      res.errorHandler && res.errorHandler(e);
    }    
  }

  public static async listOne(req: Request, res: CustomResponse){
    try{
      const {params: {id} } = req;
      const shows = await showService.findOne(+id);
      res.json(shows);
    }catch(e:any){
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async delete(req: Request, res: CustomResponse){
    try{
      const {params: {id} } = req;
      const shows = await showService.delete(+id)
      res.json(shows)
    }catch(e:any){
      res.errorHandler && res.errorHandler(e);
    }
  }

  public static async create(req:Request, res:CustomResponse){
    try{
      const show = req.body;    
      const result = await showService.create(show);

      res.status(HTTPSTATS.CREATED).json(result); 
    }catch(e){
      res.errorHandler && res.errorHandler(e);
    }       
  }  
}

export default ShowController;
