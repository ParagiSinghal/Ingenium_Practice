var objective_questions = require('../models/objective_question');
var questions = require('../models/question');

exports.objective_question_detail = function(req,res,next){

}

exports.objective_question_list = function(req,res,next){
   

};

exports.objective_question_create_get = function(req,res,next){
    
   
};


exports.objective_question_create_post = function(req,res,next){
    //console.log("Inside post method");
    var objective_question_instance = new objective_questions({
        number_of_options: req.body.number,
        optiions : [],
        correct_option : req.body.correct
    });
    //console.log("Instance created");
    objective_question_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc);
            //var id = mongoose.Types.ObjectId(req.params.macro_id);
            questions.update({_id: req.params.question_id },
                { $push :{ question_id : objective_question_instance._id }},function(err,result){
                if(err){
                    return console.log("Can't be updated !!"); 
                }//if close
                else{
                console.log('Question updated succesfully !!' + result);
                } //else close
            })//update close  
        } 
    })
};

exports.objective_question_delete_get = function(req,res,next){
    
  
};

exports.objective_question_delete_post = function(req,res,next){
    
   
};

exports.objective_question_update_get = function(req,res,next){
    
    
};
    
exports.objective_question_update_post = function(req,res,next){
      
    
};

