var express = require('express');
var Service = require('../models/service');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('service-form', { title: 'Services', username: req.session.username, authenticated: req.session.authenticated });
})

router.post('/', function (req, res, next) {
    if (req.body.officer) {
        var service = new Service(
            {
                officer: 'carmen',
                sharing: 'carmen',
                testimony: 'carmen',
                worship_leader: 'carmen',
                pianist: 'carmen',
                guitarist: 'carmen',
                violinist: 'carmen',
                lcd: 'carmen',
                flute: 'carmen'
            }
        )

        service.save(function (err, service) {
            if (err) return console.log(err);
            res.redirect('/')
        })

        // User.find().exec(function (err, list_users) {
        //     if (err) { return next(err); }
        //     res.render('index', { title: 'Users', user_list: list_users });
        // });
    }

})


// Submit Service option 
// router.post('/', function (req, res, next) {
//     //to do
// })


module.exports = router;