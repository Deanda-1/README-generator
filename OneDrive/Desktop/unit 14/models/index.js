// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

Post.hasMany(Comment,{
  foreignKey: 'post_id',
});
Post.belongsTo(User, { foreignKey: 'user_id'});

User.hasMany(Post, { foreignKey: 'post_id'});
User.hasMany(Comment,{foreignKey: 'comment_id'});

Comment.belongsTo(Post, {foreignKey: 'post_id'});
Comment.belongsTo(User, { foreignKey: 'user_id'});
/*
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
*/

module.exports = {
  Post,
  Comment,
  User
};
