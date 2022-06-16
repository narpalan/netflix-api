import { Request, Response } from "express";
import { ShowService } from '../services'
import HTTP_STATUS from '../enum/http-status.enum';

const showsService = new ShowService();

class ShowController {

  public static async list(req: Request, res: Response){    
    if(('id' in req.query) || ('id' in req.body)){ 
      try{
        let id;
        if(req.query.id){
           id = req.query.id;
        }else if(req.body.id){
           id = req.body.id;
        }
        id = Number(id);        
        const show = await showsService.find(Number(id))
        res.status(HTTP_STATUS.OK).json(show);
        return;
      } catch(e:any){
        
        res.send(e);        
      }    
      
    }
    else{
      const shows = await showsService.find();
      res.status(HTTP_STATUS.OK).send(shows);
      return;
    }       
    
  }

  public static async create(req:Request, res:Response){
    const show = req.body;    
    const result = await showsService.create(show);
    res.status(HTTP_STATUS.CREATED).send(result);    
  }
  public static async delete(req: Request, res: Response){
    try{
      const id = req.query.id;
      const result = await showsService.delete(Number(id));
      res.status(HTTP_STATUS.ACCEPTED).send(result);
    }catch(e: any){
      res.status(e.status).send(e);
    }

  }
  /**
   * 
   * @param req 
   * @param res 
   * 
   * @deprecated
   */
  public static async listOne(req:Request, res:Response){
    const id = req.query.id;    
    const result = await showsService.find(Number(id));    
    res.status(HTTP_STATUS.OK).send(result)
    //return showsService.find(Number(id))
  }
}

export default ShowController;
