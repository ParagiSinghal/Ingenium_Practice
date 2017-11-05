var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var connect = require('../mongoose-connect');
var macroskills = require('../models/macroskills');

app.use(bodyParser.json());
app.post('/macroskills',(req,res)=>{
    var newMacroskill = new macroskills({
        name : req.body.name,
        nanoskills :[]
    }
    ) 
    newMacroskill.save().then((doc)=>{
       res.send(doc);
    }),(e)=>{
        res.send(e);
    }},(e)=>{
    console.log('Error found !!')
})
app.listen('3000',()=>{

}) ;