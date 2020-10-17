import { createReducer } from "@reduxjs/toolkit";
import {fetchComentariosInicialdo, fetchComentariosSucesso } from "../actions/comentario";

 const initialState = {
      comentarios: null,  
}; 

const reducerComentario = createReducer(initialState, {
   
    [fetchComentariosInicialdo] :(state, action) =>{
        state.comentarios = null;
    },

    [fetchComentariosSucesso]: (state,action) => {
        state.comentarios = action.payload;
    }
})

export default reducerComentario;


