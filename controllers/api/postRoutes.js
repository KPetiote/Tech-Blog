// POST ROUTES
// ---------------------------------------------------------------------------

const router = require('express').Router();
const { Posts, Users, Comments } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    console.log('======================');
    Posts.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'posts_content'
        ],
      order: [['created_at', 'DESC']],
      include: [
    {
          model: Comments,
          attributes: ['id', 'comments_text', 'posts_id', 'users_id', 'created_at'],
          include: {
            model: Users,
            attributes: ['username', 'github']
          }
        },
        {
          model: Users,
          attributes: ['username', 'github']
        },
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Posts.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'posts_content'
      ],
      include: [
        
        {
          model: Users,
          attributes: ['username', 'github']
        },
        {
          model: Comments,
          attributes: ['id', 'comments_text', 'posts_id', 'users_id', 'created_at'],
          include: {
            model: Users,
            attributes: ['username', 'github']
          }
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'This ID has no posts!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, (req, res) => {
    Posts.create({
      title: req.body.title,
      posts_content: req.body.posts_content,
      users_id: req.session.users_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/:id', withAuth, (req, res) => {
    Posts.update({
        title: req.body.title,
        posts_content: req.body.posts_content
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'This ID has no posts!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Posts.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'This ID has no posts!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;
