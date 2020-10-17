import React, { Component } from 'react'
import CriarPostagem from '../components/CriarPostagem'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'

export class createpost extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <CriarPostagem/>
                <Rodape/>
            </div>
        )
    }
}

export default createpost
