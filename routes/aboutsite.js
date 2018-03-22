var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('aboutsite', { title: 'Nic Howe - About Site' });
});

module.exports = router;