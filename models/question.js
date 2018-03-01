var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var QuestionSchema = new schema({
    description: {
        type: mongooseId,
        ref : 'strimage', //Is it right ?
        default : null
        //required: true
    },
    is_comprehension: {
        type: Boolean,
        default : false
        //required: true
    },
    is_objective :{
        type: Boolean,
        default: false
    },
    is_subjective :{
        type: Boolean,
        default : false
    },
    question_id: { //on the basis of whether it is ojectiveQuestion or subjectiveQuestion
        type: mongooseId,
        ref : 'strimage',
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    question_tag: [{ //Why array ??
        type: String
        //TODO: CHECK WHETHER THIS IS A COMPULSORY FIELD FOR A QUESTION
    }],
    class: {
        type: mongooseId,
        ref:'class',
        required: true
    },
    subject: {
        type: mongooseId,
        ref:'subject',
        required: true
    },
    chapter: {
        type: mongooseId,
        ref:'chapter',
        required: true
    },
    /*macroskills: [{
        type: mongooseId,
        ref:'macroskills',
        required: true
    }],*/
    nanoskills: [{
        type: mongooseId,
        ref:'nanoskills',
        required: true
    }]
});
module.exports = mongoose.model('question', QuestionSchema);

//Correct answer should be included here ??