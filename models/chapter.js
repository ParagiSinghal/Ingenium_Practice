var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var ChapterSchema = new schema({
    name: {
        type: String,
        required: true
    },
    questions: [{
        type: mongooseId,
        required: true
    }],
    subject: {
        type: mongooseId,
        required: true
    },
    class: {
        type: mongooseId,
        required: true
    }
});
module.exports = mongoose.model('chapter', ChapterSchema);