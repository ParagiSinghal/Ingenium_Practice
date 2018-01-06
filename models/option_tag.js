var mongoose = require('mongoose');
var schema = mongoose.Schema;
var OptionTagSchema = new schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('option_tag', OptionTagSchema);