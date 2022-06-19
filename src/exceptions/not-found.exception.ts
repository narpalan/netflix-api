import HTTP_STATUS from "../enum/http-status.enum";
import HttpException from "./http.exception";

class NotFoundException extends HttpException{
  constructor(msg: string){
    super(msg, HTTP_STATUS.NOT_FOUND);
  }
}

export default NotFoundException;
