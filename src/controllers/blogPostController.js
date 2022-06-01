const blogPostService = require('../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const blogPost = await blogPostService.create(req.email, title, content, categoryIds);
    return res.status(201).json(blogPost);
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allPosts = await blogPostService.getAll();
    return res.status(200).json(allPosts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getAll,
};