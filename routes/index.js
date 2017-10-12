const express = require('express');
const router = express.Router();
const curTag = '#aboutMe';
const display = '#aboutMeText';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nicolas Howe Garcia' });
});

module.exports = router;
