var express = require('express');
var router = express.Router();

const Token = require('../schema/token')
const User = require('../schema/user')
/* GET users listing. */
router.post('/add', async function(req, res) {
    const {name, amount, userID, username} = req.body
    const newToken = new Token({name,amount,users: [{id:userID,username}], status:"open"});
    await newToken.save().then(
      await User.findByIdAndUpdate(userID, {
        $push: {
          tokens: {id:newToken._id,name:newToken.name}
        },
        $inc: {balance: -(newToken.amount)}
      })
    )
    res.send(newToken)
});
router.get('/:id/:name', (req, res) => {
  const id = req.params.id
  const name = req.params.name
  const data ={id:id, username:name}
  Token.find({users: data}, (err, doc)=> {
    console.log(doc)
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
            users: {id:userID,username:user.username}
          }
        })
        await User.findByIdAndUpdate(userID, {
          $push: {
            tokens: {id:tokenID,name:token.name}
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

router.post('/activate', (req, res) => {
  const {tokenID, userID}  = req.body
  
})
  
  
})
module.exports = router;
