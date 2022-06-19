import { Request } from "express";
import { User } from "../entities";

interface CustomRequest extends Request{
  loggedUser?:User;
}

export default CustomRequest;
