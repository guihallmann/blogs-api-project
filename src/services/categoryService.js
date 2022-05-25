const { Category } = require('../database/models');
const errorThrow = require('../utils/errorThrow');

const create = async (name) => {
  const checkCategory = await Category.findOne({ where: { name } });
  if (checkCategory) throw errorThrow(409, 'Category already exists');
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};