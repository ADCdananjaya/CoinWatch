import Joi from "joi-browser";

const validate = (data, schema) => {
  const errors = {};

  const result = Joi.validate(data, schema, { abortEarly: false });
  if (!result.error) return null;

  for (let error of result.error.details) errors[error.path[0]] = error.message;

  return errors;
};

export default validate;
