import { Request } from "express";
import { CustomResponse } from "../interfaces";
import { AuthService } from "../services";

const authService = new AuthService();

class AuthController{
  public static async login(req: Request, res: CustomResponse){    
    const { body: {email, pswd}} = req;    

    try{
      const authenticated = await authService.login(email,pswd)
      res.send(authenticated);      
    }catch(e:any){
      res.errorHandler && res.errorHandler(e.message)
    }
  }
}

export default AuthController;
