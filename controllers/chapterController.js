var chapters = require('../models/chapter');
var subjects = require('../models/subject');
var classes = require('../models/class');
/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.chapter_detail = function(req,res,next){

}

exports.chapter_list = function(req,res,next){
   

};

exports.chapter_create_get = function(req,res,next){
    
   
};


exports.chapter_create_post = function(req,res,next){
    //console.log(req.params.class_id);
    //console.log(req.params.subject_id);
   var chapters_instance = new chapters({
        name: req.body.name,
        questions : [],
        subject : req.params.subject_id,
        class : req.params.class_id
    });
    console.log('Before saving');
    chapters_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc);
            subjects.update({_id: req.params.subject_id },
                { $push :{ chapters : chapters_instance._id }},function(err,result){
                if(err){
                    return console.log("Can't be updated !!");
                    //throw err;
                //rollback(req.params.macro_id); 
                }//if close
                else{
                console.log('Subject updated succesfully !!' + result);
                } //else close
            })//update close  */
        }
    })
};

exports.chapter_delete_get = function(req,res,next){
    
  
};

exports.chapter_delete_post = function(req,res,next){
    
   
};

exports.chapter_update_get = function(req,res,next){
    
    
};
    
exports.chapter_update_post = function(req,res,next){
      
    
};

