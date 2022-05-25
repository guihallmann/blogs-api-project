const { User } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
const generateToken = require('../utils/generateJWT');

const create = async (displayName, email, password, image) => {
  const checkEmail = await User.findOne({ where: { email } });
  if (checkEmail) throw errorThrow(409, 'User already registered');
  await User.create({ displayName, email, password, image });
  const token = generateToken(email);
  return token;
};

module.exports = {
  create,
};