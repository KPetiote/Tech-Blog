// POSTS DATA JS
// ---------------------------------------------------------------------------

const { Posts } = require('../models');

const seedPosts = [
  {
    "title": "First Post",
    "posts_content": "This is my first post ",
    "users_id": 3
  },
  {
    "title": "Second Post",
    "posts_content": "This is my second post ",
    "users_id": 1
  },
  {
    "title": "Third Post",
    "posts_content": "This is my third post ",
    "users_id": 2
  },
  {
    "title": "Fourth Post",
    "posts_content": "This is my fourth post ",
    "users_id": 4
  },
  {
    "title": "Fifth Post",
    "posts_content": "This is my fifth post ",
    "users_id": 4
  }
]
const postsData = () => Posts.bulkCreate(seedPosts);

module.exports = postsData;