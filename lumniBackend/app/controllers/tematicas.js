const Tematica = require ('../models/tematicas');

module.exports.listarTematicas = function(req,res){
    let promise = Tematica.find().exec();
    promise.then(
        function(tematicas){
            res.status(200).json(tematicas);
        } 
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.detalharTematica = function(req,res){
    let id = req.params.id;
    let promise = Tematica.findById(id);
    promise.then(
        function(tematicas){
            res.status(200).json(tematicas);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.adicionarTematica = function(req,res){
    let theme = req.body;
    let promise = Tematica.create(theme);
    promise.then(
        function(tematicas){
            res.status(201).json(tematicas);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}