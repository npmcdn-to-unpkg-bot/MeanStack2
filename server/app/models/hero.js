var mongoose = require('mongoose');

module.exports = mongoose.model('Heroes', {
    name: String,
    id: String,
    address : String
});
