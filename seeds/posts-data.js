// POSTS DATA JS
// ---------------------------------------------------------------------------

const { Post } = require('../models');

const seedPosts = 
[
  {
    title: "First Post",
    post_content: "This is my first post ",
    user_id: 3
  },
  {
    title: "Second Post",
    post_content: "This is my second post ",
    user_id: 1
  },
  {
    title: "Third Post",
    post_content: "This is my third post ",
    user_id: 2
  },
  {
    title: "Fourth Post",
    post_content: "This is my fourth post ",
    user_id: 4
  }
]
const postsData = () => Post.bulkCreate(seedPosts);

module.exports = postsData;