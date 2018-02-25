//Import the mongoose module
var configuration = require('./configuration/database');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//Set up default mongoose connection
var database_url = configuration.database_url;
mongoose.connect(database_url,{
    useMongoClient : true
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('connect', function() {
    console.log('We are connected !!');
});
console.log('Connected to database');

module.exports = db;
