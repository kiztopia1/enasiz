var express = require('express');
var router = express.Router();

const Token = require('../schema/token')
const User = require('../schema/user')
/* GET users listing. */
router.post('/add', async function(req, res) {
    const {name, amount, userID} = req.body
    const newToken = new Token({name:name,amount});
    await newToken.save().then(
      await User.findByIdAndUpdate(userID, {
        $push: {
          tokens: newToken._id
        }
      })
    )
    res.send(newToken)
});
router.get('/all', (req, res) => {
  
})
module.exports = router;
