import React, { Component } from 'react';
import '../components/BotaoCriarPost.css';
import { Link } from 'react-router-dom';

export class BotaoCriarPost extends Component {
    render() {
        return (
            <div className="ButtonsContainer">
                <button className="cancel"><Link to="/forum">CANCELAR</Link></button><button className="next">PUBLICAR</button>
            </div>
        )
    }
}

export default BotaoCriarPost
