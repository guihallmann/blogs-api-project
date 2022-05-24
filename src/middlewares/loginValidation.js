const errorThrow = require('../utils/errorThrow');
const joiLogin = require('../joi/joiLogin');

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = joiLogin.validate(email, password);

  if (error) throw errorThrow('400', 'Some required fields are missing');
  
  next();
};

module.exports = { 
  loginValidation,
};