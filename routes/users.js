var express = require('express');
var User = require('../models/users');
var Service = require('../models/service');
var async = require('async')

var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('service-form', { username: req.session.username, authenticated: req.session.authenticated })
  // console.log(req.body.officer.checked);
  // User.find().exec(function (err, list_users) {
  //   if (err) { return next(err); }
  //   res.render('user', { title: 'Members', user_list: list_users, username: req.session.username, authenticated: req.session.authenticated });
  // });
})

router.get('/login', function (req, res, next) {
  res.render('login');
})

router.get('/logout', function (req, res, next) {
  delete req.session.authenticated;
  res.redirect('/');
})

router.post('/login', function (req, res, next) {

  var query = User.findOne({ name: req.body.name, password: req.body.pass });
  query.exec(function (err, user) {
    if (err) { return next(err); }
    if (user) {
      req.session.authenticated = true;
      req.session.username = user.name;
      res.redirect('/');
    }
    else {
      res.redirect('/users/login');
    }

  })

  // var user = new User(
  //   { name: req.body.name, password: req.body.pass }
  // )

  // user.save(function (err, user) {
  //   if (err) return console.log(err);
  //   res.redirect('/users')
  // })

  // User.find().exec(function (err, list_users) {
  //   if (err) { return next(err); }
  //   res.render('index', { title: 'Users', user_list: list_users });
  // });
});

router.post('/', function (req, res, next) {

  var serviceArr = [];
  var chosenService = [];
  var officer;
  var sharing;
  var testimony;
  var worship_leader;
  var pianist;
  var guitarist;
  var violinist;
  var lcd;
  var flute;

  console.log(serviceArr);

  if (serviceArr) {
    if (req.body.service) {
      updateUser(serviceArr);
    }
  }
  else
    res.redirect('/users');

  function updateUser(chosenService) {
    async.parallel([
      function (callback) {
        updateService(chosenService[0], callback);
      },
      function (callback) {
        updateService(chosenService[1], callback);
      },
      function (callback) {
        updateService(chosenService[2], callback);
      },
      function (callback) {
        updateService(chosenService[3], callback);
      },
      function (callback) {
        updateService(chosenService[4], callback);
      },
      function (callback) {
        updateService(chosenService[5], callback);
      },
      function (callback) {
        updateService(chosenService[6], callback);
      },
      function (callback) {
        updateService(chosenService[7], callback);
      },
      function (callback) {
        updateService(chosenService[8], callback);
      },
    ],
      function (err, result) {
        if (err) { return console.log(err) }
        User.findOneAndUpdate({ name: req.session.username }, { $set: { service: result } }, function (err, service) {
          if (err) { return next(err); }
          res.redirect('/');
        })
      }
    )
  }

  function updateService(name, cb) {
    Service.findOne({ name: name }, function (err, service) {
      if (err) {
        cb(err, null)
        return;
      }
      // serviceArr.push(service)
      cb(null, service);
    })
  }



})

module.exports = router;
