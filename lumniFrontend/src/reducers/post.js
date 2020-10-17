import { createReducer } from "@reduxjs/toolkit";
import { adicionarPostagem, detalharPostagem, fetchPostagensInicialdo, fetchPostagensSucesso, removerPostagem } from "../actions/post";

 const initialState = {
      posts: null, 
}; 

const reducerPost = createReducer(initialState, {
   
    [fetchPostagensInicialdo] :(state, action) =>{
        state.posts = null;
    },

    [fetchPostagensSucesso]: (state,action) => {
        state.posts = action.payload;
    }
})

export default reducerPost;


