// HOME ROUTES
// ---------------------------------------------------------------------------

const router = require('express').Router();
const sequelize = require('../config/connection');
const { Posts, Users, Comments } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    Posts.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username', 'github']
          }
        },
        {
          model: Users,
          attributes: ['username', 'github']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/LOGIN', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/SIGNUP', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/post/:id', (req, res) => {
    Posts.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username', 'github']
          }
        },
        {
          model: Users,
          attributes: ['username', 'github']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'This ID has no posts!' });
          return;
        }
  
          const post = dbPostData.get({ plain: true });
  
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;