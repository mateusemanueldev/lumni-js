var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        tematica: {
        type: String,
        require: true
        },
    })
    return mongoose.model('Tematica', schema);
}(); 