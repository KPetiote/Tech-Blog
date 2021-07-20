// SEED JS
// ---------------------------------------------------------------------------


// const { Comments, Users, Posts  } = require('../models');

const usersData = require('./users-data');
const commentsData = require('./comments-data');
const postsData = require('./posts-data');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await commentsData();

  await usersData();

  await postsData();

  process.exit(0);

};

seedDatabase();
