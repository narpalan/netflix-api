import Joi from "joi";

const joiEnumOfString = (enumerator: Object) => {
  return Joi.string().valid(...Object.values(enumerator));
}

export default joiEnumOfString;
