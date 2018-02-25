var subjects = require('../models/subject');
var classes = require('../models/class');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.subject_detail = function(req,res,next){

}

exports.subject_list = function(req,res,next){
    console.log("Inside subjects list function");
    subjects.find({},{name:1,_id:0}).then((Subjects) => {
     res.send({Subjects});
    }, (e) => {
        res.status(400).send(e);
    });
 

};

exports.subject_create_get = function(req,res,next){
    
   
};


exports.subject_create_post = function(req,res,next){
    var subject_instance = new subjects({
        name: req.body.name,
        chapters : [],
        class : req.params.class_id
    });
    subject_instance.save(function(e,doc){
        if(e){
            console.log("Subject saved succesfully !!");
            res.send(e);
            //throw e;
        }
        else{
            classes.update({_id: req.params.class_id },
                { $push :{ subjects : subject_instance._id }},function(err,result){
                if(err){
                    console.log("Can't be updated !!");
                    subjects.deleteOne({_id : subject_instance._id},function(error,results){
                        if(error){
                            console.log("subject_instance could not be backtracked !!");
                            res.send(e);
                        }
                        else{
                            console.log("subject_instance succesfully deleted");
                            res.send(results);
                        }
                    })
                    //res.send(err);
                    //throw err;
                }//if close
                else{
                    console.log('Class updated succesfully !!')
                    res.send(doc);
                } //else close
            })//update close  
        } 
    })
};

exports.subject_delete_get = function(req,res,next){
    
  
};

exports.subject_delete_post = function(req,res,next){
    
   
};

exports.subject_update_get = function(req,res,next){
    
    
};
    
exports.subject_update_post = function(req,res,next){
      
    
};
