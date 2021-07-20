// COMMENTS DATA JS
// ---------------------------------------------------------------------------

const { Comments } = require('../models');

const seedComments =
[
    {
        users_id: 1,
        posts_id: 5,
        comments_text: "Test 1"
    },
    {
        users_id: 4,
        posts_id: 5,
        comments_text: "Test 2"
    },
    {
        users_id: 1,
        posts_id: 4,
        comments_text: "Test 3"
    },
    {
        users_id: 3,
        posts_id: 6,
        comments_text: "Test 4"
    }
]

const commentsData = () => Comments.bulkCreate(seedComments);

module.exports = commentsData;