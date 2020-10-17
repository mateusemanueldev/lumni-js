import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostagens, removerPostagem } from '../actions/post';
import { fetchTematicas } from '../actions/tematicas';
import '../components/ContainerForum.css';
import Carregando from './Carregando';
import { fetchUsuarios } from '../actions/usuario';

class ContainerForum extends Component {

    componentDidMount = () => {
        this.props.fetchPostagens();
        this.props.fetchTematicas();
        this.props.fetchUsuarios();
    }
 

    render() {
        const loading = <Carregando />

        let listaPostagens = [];
        if (this.props.posts != null) {
            for (let postagem of this.props.posts) {
                let containerPost = <li class="post-user">

                    <legend>{postagem.tematica.tematica}</legend>
                    <h2>{postagem.titulo}</h2>
                    <br /><br />
                    <p className="subInfo">Postado as <label>{postagem.horario}</label> por <strong>{postagem.autor.nome}</strong></p>
                    <div className="opcoesPost">
                        <div>
                            <button id="view"><Link to={"/forum/view/"+postagem._id}>VER POSTAGEM COMPLETA</Link></button>
                            <section class="dropdown">
                            <button id="moreOpc">...</button>
                                <section class="dropdown-content">
                                <label>DENUNCIAR</label>
                                <label onClick={() => this.props.removerPostagem(postagem._id)}>REMOVER</label>  
                                </section>
                            </section>

                        </div>
                        <div>
                            <p>0<i class="icon-2" id="coment"></i></p>
                            <p>0<i class="icon-6" id="like"></i></p>
                        </div>
                    </div>
                </li>
                listaPostagens.push(containerPost)
            }
        }

        let listaTematicas = [];
            if(this.props.temas != null){
                for (let temas of this.props.temas){
                    let lista = <ul>
                        <li><label class="container">{temas.tematica}<input type="checkbox" /><span class="checkmark"></span></label></li>
                    </ul>
                    listaTematicas.push(lista);
                }
            }
      
        return (


            <div className="containerForum">
                <section class="presentation-forum">
                    <div>
                        <h2>FÓRUM LUMNI</h2>
                        <p>Troca de experiências e conhecimentos ufológicos</p>
                    </div>
                </section>
                <section className="forumConteudo">
                    <aside className="tematicas">
                        <h2>TEMÁTICAS</h2>
                        {this.props.temas == null ? loading : listaTematicas}
                    </aside>
                    <main>
                        <div className="opcPosts">
                            <form action="">
                                <select name="postagens" id="postagens">
                                    <option value="todas">Todas as postagens</option>
                                    <option value="recentes">Recentes</option>
                                    <option value="alta">Em Alta</option>
                                </select>
                            </form>
                            <button><Link to="/forum/create">Criar nova postagem</Link></button>
                        </div>
                        <ul>
                            {this.props.posts == null ? loading : listaPostagens}
                        </ul>
                    </main>
                </section>
            </div>
        )
    }
}

const mapearEstadoParaProps = (state, props) => {
    return { posts: state.postagem.posts, temas: state.tematica.tematicas, users: state.usuario.users}
}

const mapDispatchToProps = (dispatch) => {
    return {
        removerPostagem: (id) => {
            dispatch(removerPostagem(id));
        },
        fetchPostagens: () => {
            dispatch(fetchPostagens());
        },
        fetchTematicas:() =>{
            dispatch(fetchTematicas());
        },
        fetchUsuarios:() =>{
            dispatch(fetchUsuarios());
        }
    }
}



export default connect(mapearEstadoParaProps, mapDispatchToProps)(ContainerForum);
