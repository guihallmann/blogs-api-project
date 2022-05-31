const { BlogPost, PostCategory, User } = require('../database/models');
const verify = require('./categoryService');

const getUser = async (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};

const postCategory = async (categories, postId) => {
  const arr = categories.map((category) => ({ postId, categoryId: category }));
  await PostCategory.bulkCreate(arr);
};

const create = async (email, title, content, categoryIds) => {
  await verify.checkCategories(categoryIds);
  const { dataValues } = await getUser(email);
  const { id, published, updated } = await BlogPost.create({
    title,
    content,
    userId: dataValues.id,
    published: new Date(),
    updated: new Date(),
  });
  await postCategory(categoryIds, id);
  return {
    id,
    title,
    content,
    userId: dataValues.id,
    published,
    updated,
  };
};

module.exports = {
  create,
};