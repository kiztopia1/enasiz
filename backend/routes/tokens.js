var express = require('express');
var router = express.Router();

const Token = require('../schema/token')
const User = require('../schema/user')
/* GET users listing. */
router.post('/add', async function(req, res) {
    const {name, amount, userID} = req.body
    const newToken = new Token({name,amount,users: [userID]});
    await newToken.save().then(
      await User.findByIdAndUpdate(userID, {
        $push: {
          tokens: newToken._id
        }
      })
    )
    res.send(newToken)
});
router.get('/:id', (req, res) => {
  const id = req.params.id
  Token.find({users: id}, (err, doc)=> 
    res.send(doc)
  })

})
module.exports = router;
