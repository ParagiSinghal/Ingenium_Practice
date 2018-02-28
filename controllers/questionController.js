var questions = require('../models/question');
var strimg = require('../models/strimage');
var strimageController = require('./strimageController');


exports.question_detail = function(req,res,next){

}

exports.question_list = function(req,res,next){
   console.log("Inside nanoskills list function");
   questions.find({class : req.params.class_id, subject : req.params.subject_id,chapter: req.params.chapter_id }).then((Questions) => {
    res.send({Questions});
   }, (e) => {
       res.status(400).send(e);
   });

};

exports.question_create_get = function(req,res,next){
    //Render questions html page
   
};


exports.question_create_post = function(req,res,next){
    console.log("Inside question create post method");
    // var desc = new strimage({
    //     content : req.body.desc_content,
    //     image_url : req.body.desc_image_url
    // });
    // desc.save(function(e,doc){
    //     if(e){
    //         console.log("Question description saved succesfully !");
    //         //throw e;
    //     }
    //     else{
    //         console.log("Question description could not be saved");
    //     } 
    // });
    req.text = req.body.desc_content,
    req.image_url = req.body.desc_image_url
    var desc = strimageController.strimage_create_post(req,res,next);
    req.text = req.body.ques_content,
    req.image_url = req.body.ques_image_url
    var ques = strimageController.strimage_create_post(req,res,next);
    //Save description object to strimage database
    // var ques = new strimage({
    //     content : req.body.ques_content,
    //     image_url : req.body.ques_image_url
    // });
    // //Save ques instance to striamge database
    // ques.save(function(e,doc){
    //     if(e){
    //         console.log("Question saved succesfully !");
    //         //throw e;
    //     }
    //     else{
    //         console.log("Question could not be saved");
    //     } 
    // });
    var question_instance = new questions({
        description : desc._id,
        is_comprehension : req.body.is_comprehension,
        is_objective : req.body.is_ojective,
        is_subjective : req.body.is_subjective,
        question_id : ques._id,
        level : req.body.level,
        question_tag : req.body.question_tag, //Front end should return an array object 
        class : req.params.class_id,
        subject : req.params.subject_id,
        chapter : req.params.chapter_id,
        nanoskills : req.body.nanoskills
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

