var multer = require('multer');
var path = require('path');

var uploadFile = function(request, response, destinationPath, callback) {
    var filename;
    var Storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, destinationPath);
        },
        filename: function(req, file, callback) {
            filename = file.fieldname + "_" + Date.now() + "_" + file.originalname;
            callback(null, filename);
        }
    });
    var upload = multer({
        storage: Storage
    }).array("file", 3);
    upload(request, response, function(err) {
        callback(err, destinationPath + filename)
    });
}
module.exports = uploadFile;