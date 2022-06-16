import { NextFunction, Request, Response } from "express";

interface CustomResponse extends Response{
  handleError?: Function;
}

const errorHandler = (req: Request, res: CustomResponse, next: NextFunction) => {
  res.handleError = (e: any) =>{
    res
    .status(e.status)
    .json({
      error: true,
      message: e.message
    })
  }
  next();
}

export default errorHandler;
