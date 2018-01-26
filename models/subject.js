var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var SubjectSchema = new schema({
    name: {
        type: String,
        required: true
    },
    chapters: [{
        type: mongooseId,
        ref:'chapters',
        required: true
    }],
    class: {
        type: mongooseId,
        ref:'class',
        required: true
    }
});
module.exports = mongoose.model('subject', SubjectSchema);