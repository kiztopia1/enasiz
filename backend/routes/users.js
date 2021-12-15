var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../schema/user');
const passport = require('passport')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', (req, res, next) => {
  // check if user found
  User.findOne({username: req.body.username}, async(err, doc) => {
    let hashedPassword = await bcrypt.hash(req.body.password, 10)
    if(err)throw(err);
    if(doc){res.send('username is taken')}
    if(!doc) {
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
            balance: '100',
            tokens: []
        });
        await newUser.save();
        passport.authenticate('local', (err, newUser, info)=> {
          if(err) throw err;
          if(!newUser) res.send(null);
          else {
              req.logIn(newUser, err => {
                  if(err) throw err;
                  let data = {
                    id: newUser._id,
                    username: newUser.username,
                    balance: Number(newUser.balance),
                    tokens:newUser.tokens
                }
                  res.send(data);
              })
          }
          
      })(req,res,next);
        res.send('user created');
        
    }
  })
});
router.post('/login', (req, res, next) => {
  
  passport.authenticate('local', (err, user, info)=> {
      if(err) throw err;
      if(!user) res.send(null);
      else {
          req.logIn(user, err => {
              if(err) throw err;
              let data = {
                id: user._id,
                username: user.username,
                balance: Number(user.balance),
                tokens:user.tokens
            }
              res.send(data);
          })
      }
      
  })(req,res,next);
});
module.exports = router;
