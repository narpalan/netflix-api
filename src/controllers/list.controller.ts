import { UnauthorizedException } from '../exceptions';
import { CustomResponse, CustomRequest } from '../interfaces';
import ListService from '../services/list.service';

const listService = new ListService();

class ListController {

  public static async list(req: CustomRequest, res: CustomResponse){
    try{
      const myList = req.loggedUser?.list
      res.json(myList)
    }catch(e){
      res.errorHandler && res.errorHandler(e);
    }
  }

  public static async add(req: CustomRequest, res: CustomResponse){
    const {body:{showId}, loggedUser } = req;    
    try{
      if(!loggedUser){
        throw new UnauthorizedException('Unauthorized')
      }
      const added = await listService.add(showId, loggedUser)
      res.json(added)
    }catch(e: any){
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async remove(req: CustomRequest, res: CustomResponse){
    const {params: {showId}, loggedUser } = req;
    try{
      if(!loggedUser){
        throw new UnauthorizedException('Unauthorized');
      }
      const removed = await listService.remove(+showId, loggedUser);
      res.json(removed)
    }catch(e:any){
      res.errorHandler && res.errorHandler(e);
    }
  }

}

export default ListController;
