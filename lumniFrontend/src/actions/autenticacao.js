import { createAction } from "@reduxjs/toolkit";
import Axios from 'axios';
import history from '../history';
 
const url = "http://127.0.0.1:8393/usuarios/login";

export const loginSucesso = createAction("LOGIN_SUCESSO");
export const logout = createAction("LOGOUT");

export const login = function(email, senha){
    return function(dispatch, getState){
        Axios({
            method: 'POST',
            url: url+'?token='+ getState().autenticar.token,
            data: {
                email: email,
                senha: senha
            }
        }).then((response)=>{
            dispatch(loginSucesso(response.data));
            history.push("/")
            console.log(response);
        })
    }
}