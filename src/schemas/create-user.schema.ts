import Joi from "joi";

const createUserSchema = Joi.object({
  email: Joi.string().required(),
  pswd: Joi.string().required()  
})

export default createUserSchema;
