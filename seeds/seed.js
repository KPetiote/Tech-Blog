// const sequelize = require('../config/connection');
// const { Comments, Users, Posts  } = require('../models');

const usersData = require('./usersData');
const commentsData = require('./commentsData');
const postsData = require('./postsData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await commentsData();

  await usersData();

  await postsData();

  process.exit(0);

};

seedDatabase();
