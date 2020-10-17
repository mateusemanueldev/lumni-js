const Usuario = require ('../models/usuarios');
const bcrypt = require('bcrypt');

module.exports.listarUsuarios = function(req,res){
    let promise = Usuario.find().exec();
    promise.then(
        function(usuarios){
            res.status(200).json(usuarios);
        }
    ).catch( 
        function(erro){
            res.status(500).json(erro); 
        }
    )
} 

module.exports.detalheUsuario = function(req,res){
    let id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function(usuarios){
            res.status(200).json(usuarios);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

module.exports.adicionarUsuario = function(req,res){
    let user = {
        nome: req.body.nome,
        email: req.body.email,
        senha:bcrypt.hashSync(req.body.senha, 10),
    }
    let promise = Usuario.create(user);
    promise.then(
        function(usuarios){
            res.status(201).json({nome:usuarios.nome, email: usuarios.email});
        }
    ).catch(
        function(erro){
            res.status(500).json(erro); 
        }
    )
}

