const express = require('express');
const router = express.Router();
//to protect dashboard
const {ensureAuthenticated} = require('../config/auth');

//all the things are added inside the index.js

//welcome page
router.get('/', (req, res) => res.render('welcome'));
//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  // res.render('dashboard', {
  //   name: req.user.name,
  // })
  res.render('index')
);
module.exports = router;
