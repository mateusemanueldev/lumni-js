var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        titulo: {
        type: String,
        require: true
        },
        autor: {     
        type: mongoose.Schema.ObjectId,
        ref: 'Usuario',
        require: true
        }, 
        horario: { 
        type: String,
        require: true
        },
        tematica: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tematica',
        require: true
        },
        texto: {
        type: String,
        require: true
        }
    })
    return mongoose.model('Postagem', schema);
}();