module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {postId: {
    type: DataTypes.INTEGER }
  },
  {categoryId: {
    type: DataTypes.INTEGER
  }},
  {
    timestamps: false,
  });

  PostCategory.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    BlogPost.belongsToMany(Category, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  
  return PostCategory;
};