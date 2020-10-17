import React, { Component } from 'react'
import ContainerNoticias from '../components/ContainerNoticias'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'
import VideoApresentacao from '../components/VideoApresentacao'

export class inicio extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <VideoApresentacao/>
                <ContainerNoticias/>
                <Rodape/>
            </div>
        )
    }
}

export default inicio
