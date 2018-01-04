var nanoskills = require('../models/nanoskills');
var macroskills = require('../models/macroskills');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.nanoskill_detail = function(req,res,next){

}

exports.nanoskill_list = function(req,res,next){
   

};

exports.nanoskill_create_get = function(req,res,next){
    
   
};


exports.nanoskill_create_post = function(req,res,next){
    var nanoskill_instance = new nanoskills({
        name: req.body.name
    });
    nanoskill_instance.save(function(e,doc){
        if(e){
            return console.log(e);
            //throw e;
        }
        else{
            res.send(doc);
            //var id = mongoose.Types.ObjectId(req.params.macro_id);
            macroskills.update({_id: req.params.macro_id },
                { $push :{ nanoskills : nanoskill_instance._id }},function(err,result){
                if(err){
                    return console.log("Can't be updated !!");
                    //throw err;
                    this.nanoskill_delete_post(req,res,next); 
                }//if close
                else{
                console.log('Macroskill updated succesfully !!' + result);
                } //else close
            })//update close  
        } 
    })
};

exports.nanoskill_delete_get = function(req,res,next){
    
  
};

exports.nanoskill_delete_post = function(req,res,next){
    
   
};

exports.nanoskill_update_get = function(req,res,next){
    
    
};
    
exports.nanoskill_update_post = function(req,res,next){
      
    
};
