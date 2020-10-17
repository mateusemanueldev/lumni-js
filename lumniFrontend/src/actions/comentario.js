import { createAction } from "@reduxjs/toolkit";
import Axios from 'axios';
import history from '../history';

const url = "http://127.0.0.1:8393/comentarios";
export const fetchComentariosInicialdo = createAction("FETCH_COMENTARIO_INICIADO");
export const fetchComentariosSucesso = createAction("FETCH_COMENTARIO_SUCESSO");

export const fetchComentarios = () =>{
    return(dispatch, getState) => {
        Axios({ 
            method: 'GET',
            url: url+'?token='+ getState().autenticar.token,
        }).then((response) =>{
            dispatch(fetchComentariosSucesso(response.data));
        })
    }
}

export const adicionarComentario = (id_usuario,mensagem,id_postagem) =>{
    return (dispatch, getState) =>{
        dispatch(fetchComentariosInicialdo());
        Axios ({
            method: 'POST',
            url: url,
            data: { 
                usuario: id_usuario,
                mensagem: mensagem,
                postagem: id_postagem,
            }
        }).then((response) =>{

            history.push("/forum");
        })
        
    }
}

export const removerCometnario = (id) =>{
    return (dispatch, getState) => {
        Axios({
            method: 'DELETE',
            url: url+"/"+id,

        }).then((response)=>{
            dispatch(fetchComentarios());
        })
    }
}

