const controller = require("../controllers/tematicas");

module.exports = function(app){
    app.get("/tematicas", controller.listarTematicas);
    app.get("/tematicas/:id", controller.detalharTematica);
    app.post("/tematicas",controller.adicionarTematica);
}  