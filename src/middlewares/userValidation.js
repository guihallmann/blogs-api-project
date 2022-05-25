const errorThrow = require('../utils/errorThrow');
const joiUser = require('../joi/joiUser');

const userValidation = (req, _res, next) => {
  console.log(req.body);
  const { error } = joiUser.validate(req.body);
  console.log(error);

  if (error) throw errorThrow(400, error.message);
  
  next();
};

module.exports = userValidation;