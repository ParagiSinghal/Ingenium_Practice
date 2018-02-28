var strimage = require('../models/strimage');
var bodyParser = require('body-parser');
var path = require('path');
var uploadFile = require('./upload_file');

exports.strimage_detail = function(req,res,next){

}

exports.strimage_list = function(req,res,next){
   

};

exports.strimage_create_get = function(req,res,next){
    
   
};


exports.strimage_create_post = function(req,res,next){
    //console.log("Inside post method");
    uploadFile(request, response, path.join(__dirname, '../public'), function(err, filename) {
        if (err) {
            console.log('an error while uploading the image in strimages', err);
        } else {
            console.log('successfully uploaded image');
            var text = request.body.text;
            console.log('text is:' + text);
            console.log('filename is :' + filename);
            var stringImage = new strimage({
                content: text,
                image_url: '/public/' + filename
            });
            stringImage.save().then((doc) => {
                console.log('strimage stored', doc);
                return stringImage._id; //Added
            }, (err) => {
                console.log(err);
            });
        }
    });
};

exports.strimage_delete_get = function(req,res,next){
    
  
};

exports.strimage_delete_post = function(req,res,next){
    
   
};

exports.strimage_update_get = function(req,res,next){
    
    
};
    
exports.strimage_update_post = function(req,res,next){
      
    
};

