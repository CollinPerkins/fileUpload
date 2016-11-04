var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  var size = req.originalUrl.replace('/fileSize/', '');
  var sizeObj = {
    size: size
  }
  res.send(sizeObj);
});

module.exports = router;
