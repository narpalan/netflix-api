import { Request } from "express";
import { CustomResponse } from "../interface/custom-response.interface";
import AuthService from "../services/auth.service";

const authService = new AuthService();

class AuthController{
  public static async login(req: Request, res: CustomResponse){
    const { body: {email, pswd}} = req;

    res.json({token:'token ddo evernote'})
    try{
      const authenticated = authService.login(email,pswd)
      return authenticated;
    }catch(e){
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default AuthController;
