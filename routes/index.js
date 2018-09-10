var express = require('express');
var User = require('../models/users');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', authenticated: req.session.authenticated, username: req.session.username });
})


module.exports = router;
