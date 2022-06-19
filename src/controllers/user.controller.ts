import { Request } from "express";

import { HTTPSTATS } from "../enum";
import { CustomResponse } from "../interfaces";
import UserService from "../services/user.service";

const userService =  new UserService();

class UserController{
  public static async create(req: Request, res: CustomResponse){
    const { body } = req;
    try{
      const user = await userService.create(body);
      res
        .status(HTTPSTATS.CREATED)
        .json({
          id:user.id,
          email:user.email
        })
    }catch(e){
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default UserController;
