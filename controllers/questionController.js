var questions = require('../models/question');

exports.question_detail = function(req,res,next){

}

exports.question_list = function(req,res,next){
   

};

exports.question_create_get = function(req,res,next){
    
   
};


exports.question_create_post = function(req,res,next){
    //console.log("Inside post method");
    var question_instance = new questions({
        description : req.body.desc,
        is_comprehension : req.body.is_comprehension,
        is_objective : req.body.is_ojective,
        is_subjective : req.body.is_subjective,
        level : req.body.level,
        question_tag : req.body.question_tag,
        class : req.params.class_id,
        subject : req.params.subject_id,
        chapter : req.params.chapter_id,
        nanoskills : []
    });
    //console.log("Instance created");
    question_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc); 
            if(is_objective == true){
                req.params.
                res.redirect()
            }
        } 
    })
};

exports.question_delete_get = function(req,res,next){
    
  
};

exports.question_delete_post = function(req,res,next){
    
   
};

exports.question_update_get = function(req,res,next){
    
    
};
    
exports.question_update_post = function(req,res,next){
      
    
};

