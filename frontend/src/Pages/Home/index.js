import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import nimbusLogo from '../../assets/nimbus-logo.png';

export default function Home(){
    return (
        <div>
            <header>
                <div className="menuFixado">
                    <img src={nimbusLogo} className="logoMenu"/>
                    <nav className="menu">
                        <Link to="#home" className="hvr-underline-from-center">Home</Link>
                        <Link to="#sobre" className="hvr-underline-from-center">Sobre</Link>
                        <Link to="#" className="hvr-underline-from-center">Nimbus</Link>
                        <Link to="/login" className="hvr-underline-from-center">Login/Cadastro</Link>
                    </nav>
                </div>
            </header>

            <body>
                <div className="conteudo"></div>
                <div id="home"></div>
                <div id="sobre"></div>
            </body>
            
            <footer>
                <div className="contato">
                    <p>Contato:</p>
                    <p>Email: nimbus@contato.com</p>
                </div>
                <div className="direitos">
                    <img src={nimbusLogo} className="logoRodape"/>
                    <p>@2020 Nimbo-Cúmulo, Inc. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}