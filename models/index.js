// INDEX MODEL
// ---------------------------------------------------------------------------

const Comments = require('./Comments');
const Posts = require('./Posts');
const Users = require('./Users');

Users.hasMany(Posts, {
  foreignKey: 'users_id',
});

Posts.belongsTo(Users, {
  foreignKey: 'users_id',
});

Comments.belongsTo(Users, {
  foreignKey: 'users_id',
});

Comments.belongsTo(Posts, {
  foreignKey: 'posts_id',
});

Users.hasMany(Comments, {
  foreignKey:'users_id',
});

Posts.hasMany(Comments, {
  foreignKey: 'posts_id',
});

module.exports = { Users, Posts, Comments };
