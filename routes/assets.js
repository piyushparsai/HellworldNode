var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('error', { message: 'Asset', error: { status: 404, stack: 'Comming soon!'} });
});

module.exports = router;