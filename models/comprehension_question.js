var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var ComprehensionQuestionSchema = new schema({
    comprehension: {
        type: mongooseId,
        ref : 'strimage', 
        required: true
    },
    sub_questions: [{
        type: mongooseId,
        ref: 'strimage',
        required: true
    }]
});
module.exports = mongoose.model('comprehensionQuestion', ComprehensionQuestionSchema);