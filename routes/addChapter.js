var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var chapters = require('../models/chapters');
app.use(bodyParser.json());

app.post('/chapter',(req,res)=>{
    var newChapter = new chapters({
        name : req.body.name,
        questions :[],
        subject : mongoose.Types.ObjectId(),
        class : mongoose.Types.ObjectId()
    });
    newChapter.save().then((doc)=>{
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


