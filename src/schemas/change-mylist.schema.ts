import Joi from "joi";

const changeMyListSchema = Joi.object({
  showId: Joi.number().required()
  
})

export default changeMyListSchema;
