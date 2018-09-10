var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function (req, res, next) {
    res.render('about', { title: 'About us', authenticated: req.session.authenticated, username: req.session.username });
})


module.exports = router;