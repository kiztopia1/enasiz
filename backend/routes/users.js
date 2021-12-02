var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../user');
const passport = require('passport')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res) => {

  // check if user found
  User.findOne({username: req.body.username}, async(err, doc) => {
    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    if(err)throw(err);
    if(doc){res.send('username is taken')}
    if(!doc) {
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword
        });
        await newUser.save();
        res.send('user created');
        console.log(newUser, ' is created')
    }
  })
});
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info)=> {
      if(err) throw err;
      if(!user) res.send('no user Exist');
      else {
          req.logIn(user, err => {
              if(err) throw err;
              res.send('Authenticated');
          })
      }
  })(req,res,next);
});
module.exports = router;
