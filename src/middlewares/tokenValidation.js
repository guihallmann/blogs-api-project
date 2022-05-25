const checkToken = require('../utils/verifyJWT');
const errorThrow = require('../utils/errorThrow');

const authToken = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw errorThrow(401, 'Token not found');
  checkToken.authToken(token);
  next();
};

module.exports = authToken;