var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var engines = require('consolidate'); //Added
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var mongoose = require('mongoose');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();
var db = require('./connection');

require('./configuration/passport')(passport);

//var index = require('./routes/index');

//var catalog = require('./routes/catalog');
//var users = require('./routes/users')(app,passport);
require('./routes/users')(app,passport);

// view engine setup
//app.engine('html',engines.swig)
app.engine('html',engines.nunjucks)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(flash());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// required for passport
app.use(express.session({ secret: 'ingenium' })); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//console.log('lets start');
//EDITED BY SIR 
/*app.use('/signup', (req, res) => {
  console.log('singup');
  res.render('signup');
});*/
/*app.use('/login', (req, res) => {
  console.log('login');
  res.render('login');
})*/
//app.use('/',users); //commented by me 
//app.use('/users', users);
//app.use('/catalog',catalog); //adding middle-ware for all requests specific to this path
require('./routes/users')(app, passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000,()=>{
    console.log("Listening Succesfully on port 3000");
});


error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("Reached at the end");
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
