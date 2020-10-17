import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../components/RotaIndefinida.css'

export class RotaIndefinida extends Component {
    render() {
        return (
            <div className="containerUndefined">
                <div>
                <h1>Erro 404</h1>
                <h3><strong>Você acessou uma URL Inválida.</strong></h3><br/>
                <p><Link to="/">Clique aqui </Link>para voltar para o Portal Lumni</p>
                </div>
            </div>
        )
    }
}

export default RotaIndefinida
