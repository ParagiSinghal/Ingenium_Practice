var macroskills = require('../models/macroskills');
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.macroskill_detail = function(req,res,next){

}

exports.macroskill_list = function(req,res,next){
   

};

exports.macroskill_create_get = function(req,res,next){
    
   
};


exports.macroskill_create_post = function(req,res,next){
    //console.log("Inside post method");
    var macroskill_instance = new macroskills({
        name: req.body.name,
        nanoskills : []
    });
    //console.log("Instance created");
    macroskill_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.macroskill_delete_get = function(req,res,next){
    
  
};

exports.macroskill_delete_post = function(req,res,next){
    
   
};

exports.macroskill_update_get = function(req,res,next){
    
    
};
    
exports.macroskill_update_post = function(req,res,next){
      
    
};

