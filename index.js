var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var path = require('path');
const mongoose = require('mongoose');
var article = require('./model/articles.js');
 mongoose.connect('mongodb://localhost/nodekb');

      var db = mongoose.connection;

app.use(validator());

app.engine('handlebars' , exphbs());
app.set('view engine','handlebars');
app.set('views',path.join(__dirname,'views'));


app.get('/', (req,res,next)=>{
  res.render('home');
  var data = article.find({},(err,res)=>{
    if(err){console.log('error finding data');}else{
      console.log(res);
    }
  });
});

app.post('/submit', (req,res)=>{
    req.check('name','you have an error').isArray();
    var errors = req.validationErrors();
    if(errors){
      console.log('name is incorrect');
    }else{
      var user = {
        name : req.body.name
      }
      co
    }
});


app.listen(3000);
