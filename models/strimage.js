var mongoose = require('mongoose');
var schema = mongoose.Schema;
var StrimageSchema = new schema({
    content: {
        type: String
    },
    image_url: {
        type: String
    }
});
module.exports = mongoose.model('strimage', StrimageSchema);