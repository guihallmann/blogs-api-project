const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { email } = req.email;
    const blogPost = await blogPostService.create(email, title, content, categoryIds);
    return res.status(201).json({ blogPost });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};