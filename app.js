var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var engines = require('consolidate'); //Added
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var db = require('./connection');

var index = require('./routes/index');
var users = require('./routes/users');
<<<<<<< Updated upstream

var app = express();
=======

var catalog = require('./routes/catalog');

/*var register = require('./routes/register');
var add_strimage = require('./routes/add_strimage');
var add_nanoskills = require('./routes/add_nanoskills');
var add_macroskills = require('./routes/add_macroskills');
var add_option = require('./routes/add_option');
var add_optionTag = require('./routes/add_optionTag');
var add_objectiveQuestion = require('./routes/add-objectiveQuestion');
var add_comprehension = require('./routes/add_comprehensive');
var get_class = require('./routes/get_class');*/
//var app = express();
//var db = require('./connection');

>>>>>>> Stashed changes

// view engine setup
app.engine('html',engines.nunjucks)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//console.log('lets start');
app.use('/', index);
app.use('/users', users);
<<<<<<< Updated upstream
=======
app.use('/catalog',catalog); //adding middle-ware for all requests specific to this path

/*app.use('/register', register);
app.use('/add-strimage', add_strimage);
app.use('/add-nanoskills',add_nanoskills);
app.use('/add-macroskills',add_macroskills);
app.use('/add-option',add_option);
app.use('/add-optionTag',add_optionTag);
app.use('/add-ObjectiveQuestion',add_objectiveQuestion);
app.use('/add_comprehensive',add_comprehension);
app.use('/get-class',get_class);*/
>>>>>>> Stashed changes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000,()=>{
    console.log("Listening Succesfully on port 3000");
});

app.listen(3000,()=>{
    console.log("Listening Succesfully on port 3000");
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
