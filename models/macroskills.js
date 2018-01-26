var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
//var nanoskills = require('./nanoskills');

var MacroSkillsSchema = new schema({
    name: {
        type: String,
        required: true
    },
    nanoskills: [{
        type: mongooseId,
        ref: 'nanoskills',
        required: true
    }]
});
module.exports = mongoose.model('macroskill', MacroSkillsSchema);