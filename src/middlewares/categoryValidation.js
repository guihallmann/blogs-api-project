const errorThrow = require('../utils/errorThrow');
const joiCategory = require('../joi/JoiCategory');

const categoryValidation = (req, _res, next) => {
  const { error } = joiCategory.validate(req.body);

  if (error) throw errorThrow(400, '"name" is required');

  next();
};

module.exports = categoryValidation;