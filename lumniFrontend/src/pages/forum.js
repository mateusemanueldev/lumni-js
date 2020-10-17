import React, { Component } from 'react'
import ContainerForum from '../components/ContainerForum'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'

export class forum extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <ContainerForum/>
                <Rodape/>
            </div>
        )
    }
}

export default forum
