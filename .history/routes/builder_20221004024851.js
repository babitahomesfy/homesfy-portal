var express = require('express');
var router = express.Router();

/* GET builder page. */
router.get('/', function(req, res, next) {
	res.render('builder',{
		user: '<span>babita</span>'
	});
});

module.exports = router;
