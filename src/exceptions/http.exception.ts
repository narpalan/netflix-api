import HTTP_STATUS from "../enum/http-status.enum";

abstract class  HttpException extends Error{
  msg: string;
  status: HTTP_STATUS;

  constructor(msg: string, status: HTTP_STATUS){
    super(msg)
    this.status =  status;
    this.msg = msg;
  }
}
export default HttpException;
