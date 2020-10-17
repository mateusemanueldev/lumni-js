import { createReducer } from "@reduxjs/toolkit";
import { loginSucesso, logout } from "../actions/autenticacao";

 const initialState = {
      nome: localStorage.getItem("nome"),
      token: localStorage.getItem("token"),
}; 

const reducerAutenticacao = createReducer(initialState, {
    [loginSucesso] :(state, action) =>{
        state.nome = action.payload.nome;
        state.token = action.payload.token;
        localStorage.setItem("nome", action.payload.nome);
        localStorage.setItem("token", action.payload.token);
        
    },
    [logout]: (state, action) =>{
        state.nome = null;
        state.token = null;
        localStorage.removeItem("nome");
        localStorage.removeItem("token");
    }
})

export default reducerAutenticacao;


