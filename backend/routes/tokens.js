var express = require('express');
var router = express.Router();

const Token = require('../schema/token')
const User = require('../schema/user')
/* GET users listing. */
router.post('/add', async function(req, res) {
    const {name, amount, userID, username} = req.body
    const newToken = new Token({name,amount,users: [userID], usernames: [username]});
    await newToken.save().then(
      await User.findByIdAndUpdate(userID, {
        $push: {
          tokens: newToken._id
        },
        $inc: {balance: -(newToken.amount)}
      })
    )
    res.send(newToken)
});
router.get('/:id', (req, res) => {
  const id = req.params.id
  Token.find({users: id}, (err, doc)=> {
    res.send(doc)
  })

})
router.post('/connect', async(req, res) => {
  const {tokenID, userID}  = req.body
  let token = null
  let user = null
  // checking if user is already connected
  const value = User.find({tokens:tokenID}).count()
  if (value == 0 ){
    await Token.findOne({_id: tokenID},(err, doc) => token = doc ).then( async() => {
    
      await User.findById(userID,(err, doc) => user = doc).then(async () => {
  
        console.log('user',user,'token',token, 'amount', token.amount)
        await Token.findByIdAndUpdate(tokenID, {
          $push: {
            users: userID,
            usernames: user.username
          }
        })
        await User.findByIdAndUpdate(userID, {
          $push: {
            tokens: tokenID
          },
          $inc: {balance: -(token.amount)}
        }).then( async() => {
          await Token.findOne({_id:tokenID}, (err,doc) => {
            res.send(doc)
          })
        })
      }
      )
  
    })
  }else{
    res.send({error:'already connected'})
  }
  
  
})
module.exports = router;
