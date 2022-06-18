import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UnauthorizedException from "../exceptions/unauthorized.exception";
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

    const user = await userService.getUserByEmail(email);

    if(!user){
      throw new UnauthorizedException('Unauthorized');
    }

    const pswdMatches = await bcrypt.compare(pswd, user.pswd)
    if(!pswdMatches){
      throw new UnauthorizedException('Unauthorized');
    }
    
    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, 'ABCBANANA')
    
    return{
      token
    }
  }  
}

export default AuthService;
