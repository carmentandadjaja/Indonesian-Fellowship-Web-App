var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function (req, res, next) {
    // User.findOne({ name: req.session.username }).populate('service').
    //     exec(function (err, result) {
    //         if (err) return console.log(err)
    //         res.render('schedule', { title: 'Schedule', authenticated: req.session.authenticated, username: req.session.username, services: result.service });
    //     })

    User.find({ 'service': '5b907d6c8d8dee6144d39c9e' }).
        exec(function (err, result) {
            if (err) return console.log(err)
            res.render('schedule', { title: 'Schedule', authenticated: req.session.authenticated, username: req.session.username, user_role: result });

        })
})

module.exports = router;