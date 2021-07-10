const sequelize = require('../config/connection');
const { Comments, Users, Posts  } = require('../models');

const usersData = require('./userData.json');
const commentsData = require('./commentData.json');
const postsData = require('./postData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(usersData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  for (const posts of postsData) {
    await Posts.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
