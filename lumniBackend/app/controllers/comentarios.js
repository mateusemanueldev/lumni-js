const Comentario = require ('../models/comentarios')

module.exports.listarComentarios = function(req,res){
    let promise = Comentario.find()
                        .populate('postagem')
                        .populate('usuario')
                        .exec();
    promise.then(
        function(comentarios){
            res.status(200).json(comentarios);
        }
    ).catch( 
        function(erro){
            res.status(500).json(erro); 
        }
    )
} 

module.exports.detalharComentario = function(req,res){
    let id = req.params.id;
    let promise = Comentario.findById(id);
    promise.then(
        function(comentarios){
            res.status(200).json(comentarios);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.adicionarComentario = function(req,res){
    let comment = req.body;
    let promise = Comentario.create(comment);
    promise.then(
        function(comentarios){
            res.status(201).json(comentarios);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}