// USERS DATA JS
// ---------------------------------------------------------------------------

const { Users } = require('../models');

const seedUsers = [
  {
    "username": "Sal",
    "github": "salthehag",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Lernantino",
    "github": "lernantino1",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Amiko",
    "github": "Amiko2k2",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  }
]

const usersData = () => Users.bulkCreate(seedUsers, {individualHooks: true, returning: true});

module.exports = usersData;