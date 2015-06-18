/**
 * Created by Toshiba on 17/06/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('movement');
});

module.exports = router;
