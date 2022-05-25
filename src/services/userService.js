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

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } }); /* https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ */
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) throw errorThrow(404, 'User does not exist');
  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};