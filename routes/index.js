var express = require('express');
var router = express.Router();

var proj_json = require('../package.json')
var proj_name = proj_json.name

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: proj_name });
});

module.exports = router;
