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
  const {tokenID, userID, username}  = req.body
  let token = null
  let user = null
  

await Token.findOne({_id: tokenID},(err, doc) => {
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
  }
})

router.post('/activate', (req, res) => {
  const {tokenID, userID}  = req.body
  
})
  
  
})
module.exports = router;
