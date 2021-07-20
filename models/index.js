// INDEX MODEL
// ---------------------------------------------------------------------------

const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');

Users.hasMany(Posts, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE',
});

Comments.belongsTo(Users, {
  foreignKey: 'users_id',
  onDelete: 'CASCADE',
});

Comments.belongsTo(Posts, {
  foreignKey: 'posts_id',
  onDelete: 'CASCADE',
});

Users.hasMany(Comments, {
  foreignKey:'users_id',
  onDelete: 'CASCADE',
});

Posts.hasMany(Comments, {
  foreignKey: 'posts_id',
  onDelete: 'CASCADE',
});

module.exports = { Users, Posts, Comments };
