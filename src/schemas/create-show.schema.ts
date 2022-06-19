import Joi from "joi";
import { ShowCategory } from "../enum";
import joiEnumOfString from "../utils/joi-custom-types.utils";

const createShowSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  actors: Joi.string().required(),
  description: Joi.string().required(),
  category: joiEnumOfString(ShowCategory),  
  cover: Joi.string().required()
})

export default createShowSchema;
