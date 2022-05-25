const jwt = require('jsonwebtoken');
require('dotenv').config();
const errorThrow = require('./errorThrow');

const jwtSecret = process.env.JWT_SECRET;

const authToken = (token) => {
  try {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
  } catch (err) {
    throw errorThrow(401, 'Expired or invalid token');
  }
};

module.exports = authToken;