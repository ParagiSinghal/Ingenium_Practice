var users = require('../models/users');

exports.login = function(req,res){

}

exports.profile = function(req,res){

}

exports.logout = function(req,res){

}


exports.signup = isLoggedIn,function(req,res){
    console.log("Inside callback");
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}
