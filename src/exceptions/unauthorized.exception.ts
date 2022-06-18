import HTTP_STATUS from "../enum/http-status.enum";
import HttpException from "./http.exception";

export default class UnauthorizedException extends HttpException{
  constructor(msg: string){
    super(msg, HTTP_STATUS.UNAUTHORIZED);    
  }
}
