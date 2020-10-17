import React, { Component } from 'react';
import logo from "../graphic/logo.png";
import { Link } from 'react-router-dom';
import '../components/Login.css';
import { connect } from 'react-redux';
import { login } from '../actions/autenticacao';

export class Login extends Component {

    state = {
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
        this.props.login(this.state.email, this.state.senha);
    }

    render() {
        return (
            <div className="BlackgroundContainer">
                <div className="ContainerModal">
                    <img src={logo} className="logo" alt="logo" className="logo" />
                    <button className="Exit"><Link to="/"><i class="icon-15"></i></Link></button>
                    <div className="Login">
                        <div className="UserOptionsLogin">
                            <button id="Cad"><Link to="/cadastro">NOVA CONTA</Link></button><p>ou</p><button id="Log">ENTRAR</button>
                        </div>
                        <div className="FormConta">
                            <form onSubmit={this.submeterFormulario}>
                                <input type="email" placeholder="E-mail" onChange={this.modificouFormulario} id="email" value={this.state.email}/>
                                <input type="password" placeholder="Senha" onChange={this.modificouFormulario} id="senha" value={this.state.senha}/>
                                <p>Esqueceu seu usuário ou senha? <a href="#">Recupere Aqui</a></p>
                                {/* <div className="typeUserAcess">
                                    <input type="radio" id="participante" name="user" value="participante" />
                                    <label for="participante">Participante</label>
                                    <input type="radio" id="ufologo" name="user" value="ufologo" />
                                    <label for="ufologo">Ufólogo</label>
                                    <input type="radio" id="ufologo" name="user" value="ufologo" />
                                    <label for="ufologo">Acesso Restrito</label>
                                </div> */}<br/>
                                <button type="submit" className="submitLogin">Confirmar</button>
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
        login: (email,senha) =>{
            dispatch(login(email,senha));
        }
    };
}

export default connect(null, mapDispatchToProps)(Login);
