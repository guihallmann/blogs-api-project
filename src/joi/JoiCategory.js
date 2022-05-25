const Joi = require('joi');

const joiCategory = Joi.object({
  name: Joi.string().required(),
});

module.exports = joiCategory;