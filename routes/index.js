var express = require('express');
var router = express.Router();

var bgs = ['1', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
var bgCount = bgs.length-1;
/* GET home page. */
router.get('/', function(req, res) {
	var num = Math.round(Math.random()*bgCount);
	var bg = bgs[num];
	var count = req.app.get('count') || 0;
	res.render('index', {count: count, bg: bg});
});

module.exports = router;
