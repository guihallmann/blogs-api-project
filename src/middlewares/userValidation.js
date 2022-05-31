const errorThrow = require('../utils/errorThrow');
const joiUser = require('../joi/joiUser');

const userValidation = (req, _res, next) => {
  const { error } = joiUser.validate(req.body);

  if (error) throw errorThrow(400, error.message);
  
  next();
};

module.exports = userValidation;