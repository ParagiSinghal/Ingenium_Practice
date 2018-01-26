var mongoose = require('mongoose');
var schema = mongoose.Schema;
var mongooseId = schema.Types.ObjectId;
var OptionSchema = new schema({
    detail: {
        type: mongooseId, //strimage
        ref: 'strimage', //shouldn't it be ref question ??
        required: true
    },
    option_tag: {
        type: mongooseId,
        ref:'option_tag',
        required: true
    }
});
module.exports = mongoose.model('option', OptionSchema);