import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import '../components/CriarPostagem.css';
import BotaoCriarPost from './BotaoCriarPost';
import { connect } from 'react-redux';
import { adicionarPostagem } from '../actions/post';
import {fetchTematicas} from '../actions/tematicas';
import Carregando from './Carregando';
import { fetchUsuarios } from '../actions/usuario';

class CriarPostagem extends Component {
    state = {
        titulo: "",
        tematica:"",
        horario:"",
        texto:"",
        
    }

    componentDidMount = () =>{
        this.props.fetchTematicas();
        this.props.fetchUsuarios();
    }

    modificouFormulario = (event) =>{
        console.log(event.target.id);
        console.log(event.target.value);
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        })
    }

    // modificandoCKEditorState = (event, editor) =>{
    //     const data = editor.getData();
    //     this.setState({
    //         texto: data
    //     })
    // }

    submeterFormulario = (event) =>{
        event.preventDefault();
        this.props.adicionarPostagem(this.state.titulo,this.props.users._id,this.state.horario,this.state.id_tematica,this.state.texto
        );
    }
    listarTematicas = () =>{
        let options = [];
        for(let temas of this.props.temas){
        options.push(<option value={temas._id}>{temas.tematica}</option>);
        }
        return(
        <select onChange={this.modificouFormulario} id="id_tematica">
        {options}
        </select>)
    }

    listarUsuarios = () =>{
        let options = [];
        for(let users of this.props.users){
        options.push(<option value={users._id}>{users.nome}</option>);
        }
        return(
        <select onChange={this.modificouFormulario} id="id_autor">
        {options}
        </select>)
    }

    render() {
        
        return (
            <div className="containerForm">
                <h2>POSTAGEM DE DISCUSSÃO</h2>
                <label><Link to="/forum">FÓRUM</Link></label> / <label className="marked"><Link to="/forumcreate">NOVA POSTAGEM</Link></label>
                <form onSubmit={this.submeterFormulario}>
                    {/* {this.props.users == null ? <Carregando/> :this.listarUsuarios()} */}
                    <input type="time" onChange={this.modificouFormulario} placeholder="Horário" id="horario" value={this.state.horario}/>
                    <input type="text" onChange={this.modificouFormulario} id="titulo"  placeholder="Título da Postagem" value={this.state.titulo}/>
                    {this.props.temas == null ? <Carregando/> :this.listarTematicas()}
                    <div className="EditorPost">
                    {/* <CKEditor 
                    editor={ClassicEditor}
                    onInit={editor=>{ 
                    
                    }}
                    config={
                        {
                            ckfinder:{
                                uploadUrl: './upload'
                            }
                        }
                    }
                    onChange={this.modificandoCKEditorState}
                    /> */}
                    <textarea id="texto" name="texto" rows="8" cols="82" onChange={this.modificouFormulario} placeholder="Texto da Postagem..."></textarea>
                    <BotaoCriarPost/>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, props) =>{
    return {temas: state.tematica.tematicas, users: state.usuario.users}
   
}

function mapDispatchToProps(dispatch){
    return{
        adicionarPostagem: (titulo,id_autor,horario,id_tematica,texto) =>{
            dispatch(adicionarPostagem(titulo,id_autor,horario,id_tematica,texto)) 
        },
        fetchTematicas:() =>{
            dispatch(fetchTematicas());
        },
        fetchUsuarios:() =>{
            dispatch(fetchUsuarios());
        }
    };
}



export default connect(mapStateToProps, mapDispatchToProps) (CriarPostagem);    
