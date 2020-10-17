import React, { Component } from 'react';
import logo from "../graphic/logo.png";
import { Link } from 'react-router-dom';
import '../components/Cadastro.css';
import { connect } from 'react-redux';
import { adicionarUsuario,fetchUsuarios } from '../actions/usuario';

export class Cadastro extends Component {
    state = {
        nome:"",
        email:"",
        senha:"",
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
        event.preventDefault();
        this.props.adicionarUsuario(this.state.nome,this.state.email,this.state.senha);
    }

    render() {
        return (
            <div className="BlackgroundContainer">
                <div className="ContainerModal">
                    <img src={logo} className="logo" alt="logo" className="logo" />
                    <button className="Exit"><Link to="/"><i class="icon-15"></i></Link></button>
                    <div className="Cadastro">
                        <div className="UserOptionsCadastro">
                            <button id="Cad">NOVA CONTA</button><p>ou</p><button id="Log"><Link to="/login">ENTRAR</Link></button>
                        </div>
                        <div className="FormConta">
                            <form onSubmit={this.submeterFormulario}>
                                <input type="text" placeholder="Username (Ex: fulano123...)" onChange={this.modificouFormulario} id="nome" value={this.state.nome}/>
                                <input type="email" placeholder="E-mail" onChange={this.modificouFormulario} id="email" value={this.state.email}/>
                                <input type="password" placeholder="Senha no máximo 20 caracteres" maxLength="20" id="senha" onChange={this.modificouFormulario} value={this.state.senha}/>
                                {/* <div className="typeUserAcess">
                                    <input type="radio" id="participante" name="tipo" value={this.state.tipo} onChange={this.selecionarTipoUsuario}/>
                                    <label for="participante">Participante</label>
                                    <input type="radio" id="ufologo" name="tipo" value={this.state.tipo} onChange={this.selecionarTipoUsuario} />
                                    <label for="ufologo">Ufólogo</label>
                                </div> */}
                                <div className="Termos">
                                    <input type="checkbox" id="termos" />
                                    <label for="termos">Li e aceito os <a href="#" target="_blank">Termos de Uso</a> da Plataforma</label>
                                </div>
                                <button type="submit" className="submitCadastro">Confirmar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



function mapDispatchToProps(dispatch){
    return{
        adicionarUsuario: (nome,email,senha) =>{
            dispatch(adicionarUsuario(nome,email,senha));
        }
    };
}
export default connect(null,mapDispatchToProps) (Cadastro);
