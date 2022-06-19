import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UnauthorizedException } from '../exceptions';
import UserService from "./user.service";

class AuthService{
  
  /**
   * Realiza autenticação do usuário
   * 
   * @param email email do usuario
   * @param pswd pswd do usuario
   * @returns LoginResponse
   */
  async login(email: string, pswd: string){   
    
    const userService = new UserService();
    const secret = process.env.SECRET || "";

    const user = await userService.getUserByEmail(email);
    if(!user){
      throw new UnauthorizedException();
    }

    const pswdMatches = await bcrypt.compare(pswd, user.pswd)    
    if(!pswdMatches){
      throw new UnauthorizedException();
    }
    
    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, secret)
    
    return{
      token
    }
  }  
}

export default AuthService;
