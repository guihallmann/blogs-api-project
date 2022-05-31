const verifyJWT = require('../utils/verifyJWT');
const errorThrow = require('../utils/errorThrow');

const authToken = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw errorThrow(401, 'Token not found');
  
  try {
    const jwtPayload = verifyJWT(token);
    req.email = jwtPayload.data;
    next();
  } catch (err) {
    throw errorThrow(401, 'Expired or invalid token');
  }
};

module.exports = authToken;