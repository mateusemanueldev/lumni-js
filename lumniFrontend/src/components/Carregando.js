import React, { Component } from 'react'
import '../components/Carregando.css'

export class Carregando extends Component {
    render() {
        return (
            <div className="loading">
                <i class="icon-spinner"></i>
            </div>
        )
    }
}

export default Carregando
