const { BlogPost, PostCategory, User, Category } = require('../database/models');
const errorThrow = require('../utils/errorThrow');
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

const getAll = async () => {
  const posts = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) throw errorThrow(404, 'Post does not exist');
  return post;
};

module.exports = {
  create,
  getAll,
  getById,
};