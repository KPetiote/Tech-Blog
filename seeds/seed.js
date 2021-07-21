// SEED JS
// ---------------------------------------------------------------------------

const usersData = require('./users-data');
const postsData = require('./posts-data');
const commentsData = require('./comments-data');

const sequelize = require('../config/connection');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });
    console.log('\n----- Database Synced Successfully -----\n');

  await usersData();
    console.log('\n----- Users Seeded Successfully -----\n');

  await postsData();
    console.log('\n----- Posts Seeded Successfully -----\n');

  await commentsData();
    console.log('\n----- Comments Seeded Successfully -----\n');

  process.exit(0);

};

seedDatabase();
