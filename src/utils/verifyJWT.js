const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const authToken = (token) => {
    const decoded = jwt.verify(token, jwtSecret);
    return decoded;
};

module.exports = authToken;