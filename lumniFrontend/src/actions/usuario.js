import { createAction } from "@reduxjs/toolkit";
import Axios from 'axios';
import history from '../history';

const url = "http://127.0.0.1:8393/usuarios";
export const fetchUsuariosInicialdo = createAction("FETCH_USERS_INICIADO");
export const fetchUsuariosSucesso = createAction("FETCH_USERS_SUCESSO");

export const fetchUsuarios = () =>{
    return(dispatch, getState) => {
        Axios({ 
            method: 'GET',
            url: url+'?token='+ getState().autenticar.token,

        }).then((response) =>{
            dispatch(fetchUsuariosSucesso(response.data));
        })
    }
}

export const adicionarUsuario = (nome,email,senha) =>{
    return (dispatch, getState) =>{
        dispatch(fetchUsuariosInicialdo());
        Axios ({
            method: 'POST',
            url: url+'?token='+ getState().autenticar.token,
            data: {
                nome: nome,
                email: email, 
                senha: senha
            }
        }).then((response) =>{
            history.push("/login");
            return response.data;
            
        })
        
    }
}



