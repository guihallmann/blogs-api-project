const Joi = require('joi');

const joiLogin = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = joiLogin;