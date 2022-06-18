import HTTP_STATUS from "../enum/http-status.enum";
import HttpException from "./http.exception";

export default class BadRequestException extends HttpException{
  constructor(msg: string){
    super(msg, HTTP_STATUS.BAD_REQUEST);
  }
}
