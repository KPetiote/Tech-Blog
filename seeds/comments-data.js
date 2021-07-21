// COMMENTS DATA JS
// ---------------------------------------------------------------------------

const { Comment } = require('../models');

const seedComments =
[
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Test 1"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "Test 2"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Test 3"
    },
    {
        user_id: 3,
        post_id: 6,
        comment_text: "Test 4"
    }
]

const commentsData = () => Comment.bulkCreate(seedComments);

module.exports = commentsData;