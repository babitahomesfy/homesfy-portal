var express = require('express');
var router = express.Router();

/* GET details page. */
router.get('/', function(req, res, next) {
	res.render('/details',{
		user: '<span>babita</span>',
		Img: 'static/img/details/Landscaped.png',
		text: 'Landscaped Gardens'
	});
});

module.exports = router;
