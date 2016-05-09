var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.run(req, res, next);
});

module.exports = router;
