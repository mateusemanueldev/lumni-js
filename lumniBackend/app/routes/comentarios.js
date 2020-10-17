const controller = require("../controllers/comentarios");

module.exports = function(app){
    app.get("/comentarios", controller.listarComentarios);
    app.get("/comentarios/:id", controller.detalharComentario);
    app.post("/comentarios",controller.adicionarComentario);
}  