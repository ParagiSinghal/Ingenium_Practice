var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var comprehension_question = require('../models/comprehension_question');
app.use(bodyParser.json());

app.post('/comprehension_question',(req,res)=>{
    var newComprehension = new comprehension_question({
        comprehension : mongoose.Types.ObjectId(),
        sub_questions : []
    });
    newComprehension.save().then((doc)=>{
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


