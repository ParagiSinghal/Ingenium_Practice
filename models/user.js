var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var schema = mongoose.Schema;

//var userSchema = new schema({
var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String,
    },
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