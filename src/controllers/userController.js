const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.create(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};