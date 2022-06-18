import { Request } from "express";
import { CustomResponse } from "../interface/custom-response.interface";
import UserService from "../services/user.service";
const userService =  new UserService();

class UserController{
  public static async create(req: Request, res: CustomResponse){
    const { body } = req;
    try{
      const user = await userService.create(body);
      res.json

    }catch(e){

    }
  }
}

export default UserController;
