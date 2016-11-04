var express = require('express');
var router = express.Router();
var multer = require('multer');
var fileSize;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Upload' });
});

router.get('/', multer({ dest: '../uploads/'}).single('upl'), function(req,res){
	console.log(req.body); //form fields
	/* example output:
	{ title: 'abc' }
	 */
  fileSize = req.file.size;
	res.redirect('/fileSize/' + fileSize);
});

module.exports = router;
