var express = require('express');
var router = express.Router();

var translations = require('../../models/translations')

/* GET home page. */
router.get('/', function(req, res, next) {
  translations.all()
    .then(function(translations) {
      res.json(translations);
      console.log('you got them');
    })
});

module.exports = router;
