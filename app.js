var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var route = require('./cRoutes')
var app = express(); 
var session = require('express-session')
var handlebars = require('express-handlebars')
var mongoose = require('mongoose')
var flash = require('connect-flash')
require('dotenv').config()


/* Define a Handlebars helper function to format numbers with commas
Handlebars.registerHelper('formatNumber', function(num) {
  if (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    return '';
  }
}); */

app.engine('handlebars', handlebars.engine({
  extname: '.hbs', 
  //helpers: {
    //formatNumber: formatNumber
  //}

})) 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); 


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//connect to database 
mongoose.connect(process.env.DATABASE_URL, 
  {useNewUrlParser: true, useUnifiedTopology: true}).then(function() {
      console.log("Successfully connected to the database");    
  }).catch(function(err) {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });

app.use(flash())

route(app)


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
