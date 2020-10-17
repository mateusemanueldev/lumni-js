import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'
import VerPostagem from '../components/VerPostagem'

export class viewpost extends Component {
    
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Navegador/>
                <VerPostagem id={this.props.match.params.id}/>
                <Rodape/>
            </div>
        )
    }
}

export default viewpost
