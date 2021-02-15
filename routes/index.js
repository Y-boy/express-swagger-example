var express = require('express');
var router = express.Router();

const xhrObj = require('./swagger-api/demo');
/* GET home page. */
router.get('/', function(req, res) {
  xhrObj.doGet(req, res);
});

module.exports = router;
