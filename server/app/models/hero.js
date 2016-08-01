var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
    name: String,
    id: String,
    address : String
});

heroSchema.index({"$**" : "text"});
module.exports = mongoose.model('Heroes', heroSchema);
