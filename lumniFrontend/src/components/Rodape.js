import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook , faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import "../components/Rodape.css"

export class Rodape extends Component {
    render() {
        return (
            <footer className="container-rodape">
                <div className="informations">
                <ul>
                <li><a href="#" target="_blank">POLÍTICA DE PRIVACIDADE</a></li>
                <li><a href="#" target="_blank">FALE CONOSCO</a></li>
                </ul>
                <p id="copy">&copy; 2020 By Portal Lumni, Todos os direitos reservados</p>
                </div>

                <div className="social">
                <p>SIGA NOSSAS REDES SOCIAIS:</p>
                <ul>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a></li>
                </ul>
                </div>
            </footer>
        )
    }
}

export default Rodape
