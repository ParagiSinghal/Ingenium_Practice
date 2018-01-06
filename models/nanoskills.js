var mongoose = require('mongoose');
var schema = mongoose.Schema;
var NanoSkillsSchema = new schema({
    name: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('nanoSkill', NanoSkillsSchema);

//nanoskill is the name of the collection which will store documents of NanoSkillSchema type
//The first argument is the singular name of the collection that will be created for your model
//creates a model for NanoSkillsSchema, the documents related to it will be added to the collection with the name nanoskills(plural of first argument)