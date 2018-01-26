var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var ClassSchema = new schema({
    name: {
        type: String,
        required: true
    },
    subjects: [{
        type: mongooseId,
        ref: 'subjects',
        required: true
    }]
});
module.exports = mongoose.model('class', ClassSchema);