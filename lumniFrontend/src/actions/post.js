import { createAction } from "@reduxjs/toolkit";
import Axios from 'axios';
import history from '../history';

const url = "http://127.0.0.1:8393/postagens";
export const fetchPostagensInicialdo = createAction("FETCH_POSTS_INICIADO");
export const fetchPostagensSucesso = createAction("FETCH_POSTS_SUCESSO");

export const fetchPostagens = () =>{
    return(dispatch, getState) => {
        Axios({ 
            method: 'GET',
            url: url +'?token='+ getState().autenticar.token,

        }).then((response) =>{
            dispatch(fetchPostagensSucesso(response.data));
        })
    }
}

export const adicionarPostagem = (titulo,id_autor,horario,id_tematica,texto) =>{
    return (dispatch, getState) =>{
        dispatch(fetchPostagensInicialdo());
        Axios ({
            method: 'POST',
            url: url +'?token='+ getState().autenticar.token,
            data: {
                titulo: titulo,
                autor: id_autor,
                horario: horario,
                tematica: id_tematica,
                texto: texto
            }
        }).then((response) =>{
            history.push("/forum");
            return response.data;
           
        })
        
    }
}

export const removerPostagem = (id) =>{
    return (dispatch, getState) => {
        Axios({
            method: 'DELETE',
            url: url+"/"+id,

        }).then((response)=>{
            dispatch(fetchPostagens());
        })
    }
}

export const detalharPostagem = (id) =>{
    console.log(id);
    return (dispatch, getState) => {
        Axios({
            method: 'GET',
            url: url+"/"+id,

        }).then((response)=>{
            return response.data
        })
    } 
}