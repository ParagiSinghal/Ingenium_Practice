var mongoose = require('mongoose');
var schema = mongoose.Schema;
var SubjectiveQuestionSchema = new schema({
    correctAnswer: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('subjectiveQuestion', SubjectiveQuestionSchema);