const controller = require("../controllers/usuarios");
const autenticacao = require("../controllers/autenticacao");

module.exports = function(app){
    app.post("/usuarios/login",autenticacao.logarUsuario);
    app.post("/usuarios",controller.adicionarUsuario);
    app.get("/usuarios", controller.listarUsuarios);
    app.get("/usuarios/:id", controller.detalheUsuario);
    app.use("/usuarios", autenticacao.chegarTokenUsuario);
}   