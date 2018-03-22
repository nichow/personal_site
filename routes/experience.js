var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('experience', { title: 'Nic Howe - Experience' });
});

module.exports = router;