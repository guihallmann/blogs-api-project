const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');

const login = async (email, password) => {
  const loginUser = await User.findOn({ where: { email, password } });
  if (!loginUser) throw errorThrow('400', 'Invalid fields');
  const token = generateToken(email);
  return token;
};

module.exports = login;