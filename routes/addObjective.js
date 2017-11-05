var mongoose = require('mongoose');
var connect = require('../mongoose-connect');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var objective_question = require('../models/objective_question');
app.use(bodyParser.json());

app.post('/objectivequestion',(req,res)=>{
    var newObjectiveQuestion = new objective_question({
        number_of_options: req.body.number_of_options,
        options : [] ,
        correct_option : req.body.correct_option  
    });
    newObjectiveQuestion.save().then((doc)=>{
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


