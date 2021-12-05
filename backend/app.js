
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport')
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParse = require('body-parser');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');

const app = express()
const User = require('./user.js')

//mongoose config 
mongoose.connect('mongodb://localhost/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('db is connected')
    }
)

// passport config
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

// Middleware
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000', // location of the frontend app
    credentials: true
}))
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
app.use(
    session({
        secret: '234kjh32409k23409342u',
        resave: true,
        saveUninitialized: true
    })
)
app.use(cookieParser('234kjh32409k23409342u'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tokensRouter = require('./routes/tokens')
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tokens', tokensRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
