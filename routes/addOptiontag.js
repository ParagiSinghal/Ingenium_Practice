var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var option_tag = require('../models/option_tag');
app.use(bodyParser.json());

app.post('/optiontag',(req,res)=>{
    var newOptionTag = new option_tag({
        name : req.body.name
    
    });
    newOptionTag.save().then((doc)=>{
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


