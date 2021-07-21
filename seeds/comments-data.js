// COMMENTS DATA JS
// ---------------------------------------------------------------------------

const { Comment } = require('../models');

const seedComments =
[
    {
        "user_id": 1,
        "post_id": 1,
        "comment_text": "Test 1"
    },
    {
        "user_id": 2,
        "post_id": 2,
        "comment_text": "Test 2"
    },
    {
        "user_id": 3,
        "post_id": 3,
        "comment_text": "Test 3"
    },
]

const commentsData = () => Comment.bulkCreate(seedComments);

module.exports = commentsData;