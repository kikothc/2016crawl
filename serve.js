var express=require('express');
var Movie=require('./model');
var app=express();
var path=require('path');
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express)
app.get('/',function(req,res){
   Movie.find({},function(err,doc){
       res.render('index',{movies:doc})
   })
});
app.listen(8080)