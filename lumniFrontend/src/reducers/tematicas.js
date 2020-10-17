import { createReducer } from "@reduxjs/toolkit";
import {fetchTematicasInicialdo, fetchTematicasSucesso } from "../actions/tematicas";

 const initialState = {
      tematicas: null,  
}; 

const reducerTheme = createReducer(initialState, {
   
    [fetchTematicasInicialdo] :(state, action) =>{
        state.tematicas = null;
    },

    [fetchTematicasSucesso]: (state,action) => {
        state.tematicas = action.payload;
    }
})

export default reducerTheme;


