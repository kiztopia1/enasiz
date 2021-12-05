var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/add', function(req, res) {

  res.send(req.body);
});

module.exports = router;
