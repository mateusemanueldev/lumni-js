import React, { Component } from 'react';
import '../components/VerPostagem.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { detalharPostagem} from '../actions/post';
import { adicionarComentario, fetchComentarios } from '../actions/comentario';
import { Simulate } from 'react-dom/test-utils';
import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons';
import { fetchUsuarios } from '../actions/usuario';
import Carregando from './Carregando';

 class VerPostagem extends Component {
    state = {
        horario:"",
        mensagem:"",
    }
    
    componentDidMount = () => {
        this.props.detalharPostagem();
        this.props.fetchComentarios();
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

    submeterFormulario = (event) =>{
        this.props.adicionarComentario(this.props.users._id,this.state.mensagem,this.props.post._id);
        event.preventDefault();
    }
    

    render() {
        

        let Comentarios = [];
        if(this.props.comentarios != null){
            for (let coment of this.props.comentarios){
                let listac = <div className="conteudoComentarios">
                <br />
                <div>
                <p><strong>Anônimo</strong></p>
                    <p>{coment.mensagem}</p>
                </div>
                <div className="Options">
                    <ul>
                        <li><p>Denunciar<i class="icon-8" id="denunciar"></i></p></li>
                        <li><p>Responder<i class="icon-2" id="coment"></i></p></li>
                        <li><p>Curtir<i class="icon-6" id="curtir"></i></p></li>
                    </ul>
                </div>

            </div>
                Comentarios.push(listac);
            }
        }

        let postagem = [];
        if (this.props.post != null) {
            for (let post of this.props.post) {
                let conteudo = <div class="conteudoPost">
                    <h1>{post.titulo}</h1>
                    <button className="Category">{post.tematica.tematica}</button>
                    <legend>Postado as {post.horario} por <strong>{post.autor.nome}</strong></legend>
                    <p>{post.texto}</p>
                </div>
                postagem.push(conteudo)
            }
        }

        

       
        return (
            <div className="PostagemContainer">  
                    <div className="conteudoPost">
                    <h1></h1>
                    {/* <div className="conteudoPost">
                     <h1>Surpreendente Palestra Ufológica na <br/>Paranapiacaba</h1>
                    <button className="Category">Palestra Ufológica</button>
                    <legend>Postado as 14:00 por <strong>fulano123</strong></legend>
                    <p>Há dois meses atrás, divulguei aqui, o 1º Debate Ufológico de Paranapiacaba que ocorreu na III SteamCon, relembre <strong><Link to="https://www.facebook.com/events/924484057575585/" target="_blank" className="linkPostEvent">neste link</Link></strong>.
                Agora trazemos a íntegra de tudo que rolou no debate. Porém começamos, neste post, com a palestra completa dada pelo ufólogo Josef Prado.
                Achei muito importante esta iniciativa da BURN, pois deram uma ótima palestra de Ufologia científica para um público, em sua maioria, leigo. Isso é muito importante para
                ajudar a tirar a atmosfera preconceituosa que existe em cima de fatos ufológicos.
                Agradeço ao Josef Prado pelo compartilhamento do material com nosso blog e lembro que muitos que aqui frequentam não vão concordar inteiramente com o que é dito na palestra, pois é uma apresentação
                de UFOLOGIA CIENTÍFICA. Os que seguem mais outras formas de ufologia, como mística e espiritualista, precisam estar com a mente e o coração abertos para esta outra vertente.</p>
                </div>  */}
                {postagem}
                </div>    

                <div className="Options">
                    <ul>
                        <li><p>Denunciar<i class="icon-8" id="denunciar"></i></p></li>
                        <li><p>Curtir<i class="icon-6" id="curtir"></i></p></li>
                    </ul>
                </div>

                <form className="ContentComment" onSubmit={this.submeterFormulario}>
                    <h3>COMENTÁRIOS</h3><br/>
                    <input type="text" placeholder="Deixe seu comentário" onChange={this.modificouFormulario} id="mensagem" value={this.state.mensagem}/> 
                    <button>Publicar</button>
                </form>
                <br />

                {/* <div className="conteudoComentarios">
                    <br />
                    <div>
                        <p><strong>Miranda</strong></p>
                        <p>Amei essa palestra, memino que curiosooo!</p>
                    </div>
                    <div className="Options">
                        <ul>
                            <li><p>Denunciar<i class="icon-8" id="denunciar"></i></p></li>
                            <li><p>Responder<i class="icon-2" id="coment"></i></p></li>
                            <li><p>Curtir<i class="icon-6" id="curtir"></i></p></li>
                        </ul>
                    </div>

                </div> */}
                
                {Comentarios} 
            </div>
        ) 
    } 
}

const mapearEstadoParaProps = (state, props) => {
    return {post: state.postagem.posts, comentarios: state.comentario.comentarios, users: state.usuario.users}
}

const mapDispatchToProps = (dispatch) => { 
    return { 
        detalharPostagem: (id) => {
            dispatch(detalharPostagem(id));
        },
        fetchComentarios: () =>{
            dispatch(fetchComentarios());
        },
        adicionarComentario: (id_usuario,mensagem,id_postagem) =>{
            dispatch(adicionarComentario(id_usuario,mensagem,id_postagem));
        },
        fetchUsuarios:() =>{
            dispatch(fetchUsuarios());
        }
    } 
}
export default connect(mapearEstadoParaProps, mapDispatchToProps) (VerPostagem);
