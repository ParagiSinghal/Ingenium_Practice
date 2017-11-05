var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var option = require('../models/option');
app.use(bodyParser.json());

app.post('/option',(req,res)=>{
    var newOption = new option({
        name : req.body.name,
        questionTag : mongoose.Types.ObjectId(),
    
    });
    newOption.save().then((doc)=>{
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


