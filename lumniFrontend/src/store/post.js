import { configureStore } from "@reduxjs/toolkit";
import reducerComentario from "../reducers/comentario";
import reducerPost from "../reducers/post";
import reducerRaiz from "../reducers/post";
import reducerTheme from "../reducers/tematicas";
import reducerUsuario from "../reducers/usuario";
import reducerAutenticacao from "../reducers/autenticacao";

const { createStore } = require("redux");

const store = configureStore({
    reducer:{ 
        postagem: reducerPost,
        tematica: reducerTheme,
        usuario: reducerUsuario,
        comentario: reducerComentario,
        autenticar: reducerAutenticacao,
    }
}
);

export default store;