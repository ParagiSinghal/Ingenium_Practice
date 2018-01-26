var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var schema = mongoose.Schema;

var userSchema = new schema({
    email: {
        type: String,
        required: true,
        max: 20
    },
    password: {
        type: String,
        required: true,
        max: 15
    },
    //Designation: {type: String,required:true},
    //Insitute: String,
    //Age: Number,
    google : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);