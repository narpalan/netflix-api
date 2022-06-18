import BadRequestException from "./bad-request.exception";

class ValidationException extends BadRequestException{
  details?: string[]

  constructor(msg: string, details?: any[]){
    super(msg);
    this.details = details;    
  }
}

export default ValidationException;
