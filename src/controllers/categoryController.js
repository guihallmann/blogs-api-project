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

module.exports = {
  create,
};