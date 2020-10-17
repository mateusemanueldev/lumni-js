import { createReducer } from "@reduxjs/toolkit";
import { fetchUsuariosInicialdo, fetchUsuariosSucesso } from "../actions/usuario";

 const initialState = {
      users: null,  
}; 

const reducerUsuario = createReducer(initialState, {
   
    [fetchUsuariosInicialdo] :(state, action) =>{
        state.users = null;
    },

    [fetchUsuariosSucesso]: (state,action) => {
        state.users = action.payload;
    }
})

export default reducerUsuario;


