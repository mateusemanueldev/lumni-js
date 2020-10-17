const Usuario = require ('../models/usuarios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.logarUsuario = function(req,res){
    function logar(user){
        if(bcrypt.compareSync(req.body.senha, user.senha)){
            let token = jwt.sign({userId: user._id},'secret');
            res.status(200).json({token: token, nome: user.nome});
        }else{
            falhar();
        }
    }
    function falhar(error){
        res.status(401).send("E-mail ou senha inválidos");
    }
    Usuario.findOne({email: req.body.email}).exec().then(logar).catch(falhar);
}

module.exports.chegarTokenUsuario = function(req,res, next){
    let token = req.query.token;
    jwt.verify(token, 'secret', function (err, decoder){
       if(err){
           res.status(401).send("Usuário não autenticado!")
       }
       next();
    })
}
