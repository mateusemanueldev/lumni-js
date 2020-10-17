import React, { Component } from 'react';
import '../components/BotaoExibirTodos.css';

export class BotaoExibirTodos extends Component {
    render() {
        return (
            <div className="verMais">
                <a href="#">
                <p>MOSTRAR TODAS</p>
                </a>
            </div>
        )
    }
}

export default BotaoExibirTodos
