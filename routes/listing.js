var express = require('express');
var router = express.Router();

/* GET listing page. */
router.get('/', function(req, res, next) {
	res.render('listing', {
		user: 'raghuvanshi'
	  });
});

module.exports = router;
