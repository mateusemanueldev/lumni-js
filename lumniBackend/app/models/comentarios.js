var mongoose = require('mongoose');

module.exports = function(){
    var schema = mongoose.Schema({
        usuario: {     
        type: mongoose.Schema.ObjectId,
        ref: 'Usuario',
        require: true
        },  
        // horario: {
        // type: String,
        // require: true
        // },
        mensagem: {
        type: String,
        require: true
        },
        postagem: {
        type: mongoose.Schema.ObjectId,
        ref: 'Postagem',
        require: true
        }
    })
    return mongoose.model('Comentario', schema);
}();