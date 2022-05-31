const errorThrow = require('../utils/errorThrow');
const joiPost = require('../joi/joiBlogPost');

const userValidation = (req, _res, next) => {
  const { error } = joiPost.validate(req.body);

  if (error) throw errorThrow(400, 'Some required fields are missing');
  
  next();
};

module.exports = userValidation;