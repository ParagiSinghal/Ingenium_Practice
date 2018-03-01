var classes = require('../models/class');
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.class_detail = function(req,res,next){

}

exports.class_list = function(req,res,next){
    console.log("Inside class list function");
    classes.find({},{name:1,_id:0}).then((Class) => {
        res.send({Class});
    }, (e) => {
       res.send(e);
    });
};

exports.class_create_get = function(req,res,next){
    res.render(uploadFile);
};


exports.class_create_post = function(req,res,next){
    console.log("Inside class create post method");
    var classes_instance = new classes({
        name: req.body.name,
        subjects : []
    });
    classes_instance.save(function(e,doc){
        if(e){
            console.log("Class could not be created!!");
            res.send(e);
            //throw e;
        }
        else{
            console.log("Class created succesfully!");
            res.send(doc); 
        } 
    })
};

exports.class_delete_get = function(req,res,next){
    
  
};

exports.class_delete_post = function(req,res,next){
    
   
};

exports.class_update_get = function(req,res,next){
    
    
};
    
exports.class_update_post = function(req,res,next){
      
    
};

