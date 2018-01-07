var classes = require('../models/class');
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.class_detail = function(req,res,next){

}

exports.class_list = function(req,res,next){
   

};

exports.class_create_get = function(req,res,next){
    
   
};


exports.class_create_post = function(req,res,next){
    var classes_instance = new classes({
        name: req.body.name,
        subjects : []
    });
    classes_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc); 
            console.log(doc);
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

