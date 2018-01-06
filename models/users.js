var mongoose = require('mongoose');
var schema = mongoose.Schema;


var user = new schema({
    username: {
        type: String,
        required: true,
        max: 20
    },
    password: {
        type: String,
        required: true,
        max: 15
    }
});
// user.method.getPasswordHash = function(password){
// 
// }
module.exports = mongoose.model('user', user);