var express = require('express');
var router = express.Router();

var translations = require('../../models/translations')

/* GET home page. */
router.get('/1.0', function(req, res, next) {
  translations.getVersion1()
    .then(function(translations) {
      res.json(translations);
      console.log('you got first version');
    })
});

router.get('/1.1', function(req, res, next) {
  translations.getVersion101()
    .then(function(translations) {
      res.json(translations);
      console.log('you got version 1.1');
    })
});

module.exports = router;
