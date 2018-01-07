var subjects = require('../models/subject');
var classes = require('../models/class');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.subject_detail = function(req,res,next){

}

exports.subject_list = function(req,res,next){
   

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
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc);
            //var id = mongoose.Types.ObjectId(req.params.macro_id);
            classes.update({_id: req.params.class_id },
                { $push :{ subjects : subject_instance._id }},function(err,result){
                if(err){
                    return console.log("Can't be updated !!");
                    //throw err;
                //rollback(req.params.macro_id); 
                }//if close
                else{
                console.log('Class updated succesfully !!' + result);
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
