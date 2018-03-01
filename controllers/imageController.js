var multer = require('multer');
var path = require('path');
var router = require('express').Router();

var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './uploads/');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now()+ "_"  + file.originalname);
    }
  });
  var upload = multer({ 
      storage : storage 
    }).array('userPhoto',3);

   exports.image_upload_get = function(req, res) {
       console.log('Inside upload get function');
        res.render('uploadFile'); // load the index.html file
     };
    
    exports.image_upload_post = function(request,response){
        //uploadFile(request, response, path.join(__dirname, '../public'), function(err, filename) {
        upload(request,response,function(err){
            if (err) {
                console.log('an error while uploading the images in strimages', err);
                response.send(err);
            } else {
                console.log(request.body);
                console.log(request.files);
                console.log('successfully uploaded images');
                response.send('successfully uploaded images');//,request.files);
                //response.send(request.files);
            }
        })
    };

    exports.all_images = function(request,response){

    };


// var uploadFile = function(request, response, destinationPath, callback) {
//     var filename;
//     console.log('Pahonch gaya uploadFile function mein');
//     var Storage = multer.diskStorage({
//         destination: function(req, file, callback) {
//             //callback(null, destinationPath);
//             //callback(null,'./uploads');
//             callback(null,path.resolve(__dirname, './test'));
//         },
//         filename: function(req, file, callback) {
//             filename = file.fieldname + "_" + Date.now() + "_" + file.originalname;
//             callback(null, filename);
//         }
//     });
//     console.log('Lo ji, ho gayi storage set');
//     var upload = multer({
//         storage: Storage
//     }).array("file", 3);
//     upload(request, response, function(err) {
//         callback(err, destinationPath + filename)
//     });
//     //console.log('Ho gaya uplaod');
// }

// // module.exports = function(req,res,next){
// //     console.log("Inside upload files method");
// //     uploadFile(request, response, path.join(__dirname, '../public'), function(err, filename) {
// //         if (err) {
// //             console.log('an error while uploading the images in strimages', err);
// //             response.send(err);
// //         } else {
// //             console.log(request.files);
// //             console.log('successfully uploaded images');
// //             response.send('successfully uploaded images');
// //         }
// //     });
// //     res.send("");
// // };

// //module.exports = router;
