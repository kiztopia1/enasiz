var express = require('express');
var router = express.Router();

const Token = require('../schema/token')

/* GET users listing. */
router.post('/add', function(req, res) {
    const newToken = new Token(req.body);
    console.log(newToken)
    newToken.save()
  res.send(newToken);
});

module.exports = router;
