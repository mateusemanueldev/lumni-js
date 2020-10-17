const bodyParser = require('body-parser');
const express  = require('express');
const postagensRouter = require('../app/routes/postagens');
const tematicasRouter = require('../app/routes/tematicas');
const comentariosRouter = require('../app/routes/comentarios');
const usuariosRouter = require('../app/routes/usuarios');

module.exports = function(){
    let app = express()
    app.set("port",8393);
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    postagensRouter(app);
    tematicasRouter(app);
    comentariosRouter(app);
    usuariosRouter(app);
    return app;
}
