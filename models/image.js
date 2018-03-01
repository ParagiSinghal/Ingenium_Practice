var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var ImageSchema = new schema({
    local_url: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('image', ImageSchema);