import React, { Component } from 'react'
import logo from '../graphic/logo.png';
import { Link } from 'react-router-dom';
import '../components/Navegador.css';
import { connect } from 'react-redux';
import { login, logout } from '../actions/autenticacao';

class Navegador extends Component {


    logado = ()=>{
        return (<div class="ContainerLogado">
        <div class="dropdown">
        <div className="containerPerfil">
            <div className="avatarPerfil">
                <span><i class="icon-U"></i></span>
            </div>
            <div className="infoUser">
                <h3>{this.props.nome}</h3><legend>Participante</legend>
            </div>
        </div>
            <div class="dropdown-content">
            <a href="#">Meu Perfil</a>
            <a href="/" onClick={this.props.logout}>Sair</a>
            </div>
        </div>
        </div>)
    }

    login = ()=>{
        return(<button class="conta-usuario">
        <i class="icon-U"></i><legend><Link to="/login">Entre ou <br/> Cadastre-se</Link></legend></button>)
    }
    

    render() {


        return (
            <nav>
                <img src={logo} className="logo"/>
                <ul className="menu-principal">
                    <li><Link to="/">INÍCIO</Link></li>
                    <li><Link to="/forum">FÓRUM</Link></li>
                    <li><Link to="">RELATOS</Link></li>
                    <li><Link to="/sobre">SOBRE NÓS</Link></li>
                </ul>
                <form>
                    <input type = "search" placeholder="O que você procura?"/>
                    <button type="submit"><i class="icon-B" id="lupa"></i></button>
                </form>
                    <button><i class="icon-I"></i></button>
                   

                    {/* {this.props.token==null ? this.login(): this.logado()} */}
                    {this.props.token == null ? this.login(): this.logado()}
                    
            </nav>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        nome: state.autenticar.nome,
        token: state.autenticar.token,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        login:() =>{
            dispatch(login())
        },
        logout: () =>{
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navegador);
