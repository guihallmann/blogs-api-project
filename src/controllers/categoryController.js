const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await categoryService.create(name);
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
};