import Joi from "joi";

const createEpisodeSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  cover: Joi.string().required(),
  duration: Joi.number().required(),
  showId: Joi.number().required()
});

export default createEpisodeSchema;
