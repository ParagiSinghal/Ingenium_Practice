var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var nanoskills = require('../models/nanoskills');
app.use(bodyParser.json());

app.post('/nanoskills',(req,res)=>{
    var newNanoskills = new nanoskills({
        name : req.body.name
    });
    newNanoskills.save().then((doc)=>{
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


