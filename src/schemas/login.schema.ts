import Joi from "joi"

const loginSchema = Joi.object({
  email: Joi.string().required(),
  pswd: Joi.string().required()
})

export default loginSchema;
