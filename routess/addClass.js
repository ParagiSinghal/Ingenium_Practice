var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var Class = require('../models/class');
app.use(bodyParser.json());

app.post('/class',(req,res)=>{
    var newClass = new Class({
        name : req.body.name
    });
    newClass.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.send(e);
    }); 
},(e)=>{
    console.log("Error!!");
}

)

app.listen(3000,()=>{
    console.log("Listening !!");
  });