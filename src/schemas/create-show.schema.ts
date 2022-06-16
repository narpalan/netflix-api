import Joi from "joi";

const createShowSchema = Joi.object({
  title: Joi.string().required(),
  cover: Joi.string(),
  director: Joi.string(), 
  actors: Joi.string(),
  description: Joi.string(),
  category: Joi.string().required()
})

export default createShowSchema;
