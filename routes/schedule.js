var express = require('express');
var router = express.Router();
var User = require('../models/users');
var Service = require('../models/service');
var async = require('async')

//Object ID of each service from database
const officer_id = '5b907d6c8d8dee6144d39c9e'
const sharing_id = '5b907da98d8dee6144d39c9f'
const testimony_id = '5b907dae8d8dee6144d39ca0'
const wl_id = '5b907db98d8dee6144d39ca1'
const pianist_id = '5b907dc18d8dee6144d39ca2'
const guitarist_id = '5b907dc68d8dee6144d39ca3'
const violinist_id = '5b907dce8d8dee6144d39ca4'
const lcd_id = '5b907dd28d8dee6144d39ca5'
const flute_id = '5b907dd68d8dee6144d39ca6'


/* GET list of services and each member who has signed up for them. */
router.get('/', function (req, res, next) {
    async.parallel({
        service: function (callback) {
            Service.find().exec(callback);
        },
        officer_member: function (callback) {
            User.find({ service: officer_id }).exec(callback);
        },
        sharing_member: function (callback) {
            User.find({ service: sharing_id }).exec(callback);
        },
        testimony_member: function (callback) {
            User.find({ service: testimony_id }).exec(callback);
        },
        wl_member: function (callback) {
            User.find({ service: wl_id }).exec(callback);
        },
        pianist_member: function (callback) {
            User.find({ service: pianist_id }).exec(callback);
        },
        guitarist_member: function (callback) {
            User.find({ service: guitarist_id }).exec(callback);
        },
        violinist_member: function (callback) {
            User.find({ service: violinist_id }).exec(callback);
        },
        lcd_member: function (callback) {
            User.find({ service: lcd_id }).exec(callback);
        },
        flute_member: function (callback) {
            User.find({ service: flute_id }).exec(callback);
        }

    },
        function (err, results) {
            if (err) { return next(err); }
            res.render('schedule', {
                authenticated: req.session.authenticated,
                username: req.session.username,
                serviceList: results.service,
                officer: results.officer_member,
                sharing: results.sharing_member,
                testimony: results.testimony_member,
                wl: results.wl_member,
                pianist: results.pianist_member,
                guitarist: results.guitarist_member,
                violinist: results.violinist_member,
                lcd: results.lcd_member,
                flute: results.flute_member,
            })
        })





    // User.find({ 'service': '5b907d6c8d8dee6144d39c9e' }).
    //     exec(function (err, result) {
    //         if (err) return console.log(err)
    //         res.render('schedule', { title: 'Schedule', authenticated: req.session.authenticated, username: req.session.username, user_role: result });

    //     })
})

module.exports = router;