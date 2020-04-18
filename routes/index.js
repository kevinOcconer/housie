var express = require('express');
var router = express.Router();
var tambola = require('tambola-generator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(tambola.getTickets(10));
console.log(tambola.getTickets(10))
});

module.exports = router;
