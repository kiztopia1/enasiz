var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res) => {
  console.log(req.body)
  // check if useris found
  User.findOne({username: req.body.username}, async(err, doc) => {
    console.log(err, doc)
    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    
    if(doc){res.send('username is taken')}
    if(!doc) {
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        });
        await newUser.save();
        res.send('user created');
        console.log('create')
    }
  })
})
module.exports = router;
