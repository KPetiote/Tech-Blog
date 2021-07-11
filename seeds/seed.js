const sequelize = require('../config/connection');
const { Comments, Users, Posts  } = require('../models');

const usersData = require('./usersData.json');
const commentsData = require('./commentsData.json');
const postsData = require('./postsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const comments = await Comments.bulkCreate(commentsData);

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(postsData);

  process.exit(0);
};

seedDatabase();
