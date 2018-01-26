var sujective_questions = require('../models/sujective_question');
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.sujective_question_detail = function(req,res,next){

}

exports.sujective_question_list = function(req,res,next){
   

};

exports.sujective_question_create_get = function(req,res,next){
    
   
};


exports.sujective_question_create_post = function(req,res,next){
    //console.log("Inside post method");
    var sujective_question_instance = new sujective_questions({
        correctAnswer: req.body.correct,
    });
    //console.log("Instance created");
    sujective_question_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.sujective_question_delete_get = function(req,res,next){
    
  
};

exports.sujective_question_delete_post = function(req,res,next){
    
   
};

exports.sujective_question_update_get = function(req,res,next){
    
    
};
    
exports.sujective_question_update_post = function(req,res,next){
      
    
};

