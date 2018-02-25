var nanoskills = require('../models/nanoskills');
var macroskills = require('../models/macroskills');
//var mongoose = require('mongoose');

/*process.on('uncaughtException', (err) => {
    console.log('whoops! there was an error', err.stack);
  });*/

exports.nanoskill_detail = function(req,res,next){

}

exports.nanoskill_list = function(req,res,next){
   console.log("Inside nanoskills list function");
   nanoskills.find({},{name:1,_id:0}).then((NanoSkills) => {
    res.send({NanoSkills});
   }, (e) => {
       res.status(400).send(e);
   });

};

exports.nanoskill_create_get = function(req,res,next){
    
   
};


exports.nanoskill_create_post = function(req,res,next){
    var nanoskill_instance = new nanoskills({
        name: req.body.name
    });
    nanoskill_instance.save(function(e,doc){
        if(e){
            console.log("Nanoskill instance not saved");
            res.send(e);
            //return console.log(e);
            //throw e;
        }
        else{
            console.log("Nanoskill saved succesfully");
            macroskills.update({_id: req.params.macro_id },
                { $push :{ nanoskills : nanoskill_instance._id }},function(err,result){
                if(err){
                    console.log(err);
                    console.log("Can't be updated !!");
                }
                else if(result == null){
                    nanoskills.deleteOne({_id : nanoskill_instance._id},function(error,results){y 
                        if(error){
                            //console.log("Nanoskill could not be backtracked !!");
                            res.send("Nanoskill could not be backtracked!!");
                        }
                        else{
                            console.log("Nanoskill succesfully deleted");
                            res.send(results);
                        }
                    })
                    //res.status(400).send(e);
                    //throw err;
                    //this.nanoskill_delete_post(req,res,next); 
                }//if close
                else{
                    console.log('Macroskill updated succesfully !!');
                    res.send(doc);
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
