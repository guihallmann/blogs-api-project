const { BlogPost, PostCategory, User } = require('../database/models');
const verify = require('./categoryService');

const getUserId = async (email) => {
  const userId = User.findOne({ where: { email } });
  return userId;
};

const postCategory = async (categories, postId) => {
  const arr = categories.map((category) => ({ postId, categoryId: category }));
  await PostCategory.bulkCreate(arr);
};

const create = async (email, title, content, categoryIds) => {
  await verify.checkCategories(categoryIds);
  const userId = await getUserId(email);
  const { id, published, updated } = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  await postCategory(categoryIds, id);
  return {
    id,
    title,
    content,
    userId,
    published,
    updated,
  };
};

module.exports = {
  create,
};