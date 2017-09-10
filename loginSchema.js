//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: {type: String , required :true},
    password: {type: String, required :true},
    Designation: {type: String,required:true},
    Insitute: String,
    Age: Number
});

var SomeModel = mongoose.model('SomeModel', SomeModelSchema );