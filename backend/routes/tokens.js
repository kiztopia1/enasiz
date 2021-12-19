var express = require('express');
var router = express.Router();

const Token = require('../schema/token')
const User = require('../schema/user')
/* GET users listing. */
router.post('/add', async function(req, res) {
  console.log(req.user, 'my passport log')
    const {name, amount, userID} = req.body
    const newToken = new Token({name,amount,users: [{id:userID}],setStatus: [false] , status:"open"});
    await newToken.save().then(
      await User.findByIdAndUpdate(userID, {
        $push: {
          tokens: {id:newToken._id }
        },
        $inc: {balance: -(newToken.amount)}
      })
    )
    res.send(newToken)
});
router.get('/:id', (req, res) => {
  console.log(req.isAuthenticated(), 'my passport log')
  const id = req.params.id
  Token.find({users: id}, (err, doc)=> {
    console.log(doc)
    res.send(doc)
  })

})
router.post('/connect', async(req, res) => {
  const {tokenID, userID, username}  = req.body
  let token = null
  let user = null
  
  await Token.findOne({_id: tokenID.trim()},(err, doc) => {
    token = doc
    const demoUser = {
      'id':userID,
      'username': username
    }
    const array = doc.users.filter(user => user.id == demoUser.id)

    if (array[0]){
      res.send({error:'already connected'})
    }else{
      
      User.findById(userID,(err, doc) => user = doc).then(async () => {
      
          await Token.findByIdAndUpdate(tokenID, {
          $push: {
            users: {id:userID},
            setStatus: false
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
    }
  })

router.post('/activate/', (req, res) => {
  const {tokenID, userID}  = req.body
})
  
  
})
module.exports = router;
