var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var ObjectiveQuestionSchema = new schema({
    number_of_options: {
        type: Number,
        required: true
    },
    options: [{
        type: mongooseId,
        ref : 'strimage', //added
        required: true
    }],
    correct_option: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('objectiveQuestion', ObjectiveQuestionSchema);