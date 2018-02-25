var chapters = require('../models/chapter');
var subjects = require('../models/subject');
var classes = require('../models/class');
/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.chapter_detail = function(req,res,next){

}

exports.chapter_list = function(req,res,next){
    console.log("Inside chapters list function");
    chapters.find({}).then((Chapters) => {
        res.send({Chapters});
    }, (e) => {
       res.send(e);
    });
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
    chapters_instance.save(function(e,doc){
        if(e){
            console.log('Chapter could not be saved');
            res.send(e);
            //throw e;
        }
        else{
            console.log('Chapter saved succesfully');   
            subjects.update({_id: req.params.subject_id },
                { $push :{ chapters : chapters_instance._id }},function(err,result){
                if(err){
                    console.log("Can't be updated !!");
                    res.send(err);
                    //throw err; 
                }//if close
                 else{
                     console.log('Subject updated succesfully !!');
                     res.send(doc);
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

