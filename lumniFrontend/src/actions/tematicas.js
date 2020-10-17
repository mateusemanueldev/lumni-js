import { createAction } from "@reduxjs/toolkit";
import Axios from 'axios';

const url = "http://127.0.0.1:8393/tematicas";

export const fetchTematicasInicialdo = createAction("FETCH_TEMATICAS_INICIADO");
export const fetchTematicasSucesso = createAction("FETCH_TEMATICAS_SUCESSO");

export const fetchTematicas = () =>{
    return(dispatch, getState) => {
        Axios({ 
            method: 'GET',
            url: url,

        }).then((response) =>{
              dispatch(fetchTematicasSucesso(response.data));
        })
    }
}



