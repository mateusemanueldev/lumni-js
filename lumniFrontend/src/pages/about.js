import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'
import SobreProjeto from '../components/SobreProjeto'

export class about extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <SobreProjeto/>
                <Rodape/>
            </div>
        )
    }
}

export default about
