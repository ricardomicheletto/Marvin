import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles-application.css';

import leftArrow from '../../assets/icons/left-arrow.svg';
import userIcon from '../../assets/icons/user.svg';
import marvinIcon from '../../assets/icons/emotions.svg';

export default function Application(){
    return (
        <div>
            <body>
                <div className="sideMenu">
                    <div className="menuContent">
                        <section><Link to="/"><img src={leftArrow} alt="Seta apontando para a esquerda"/>Voltar</Link></section><br/>
                        <section><Link to="/user-settings"><img src={userIcon} alt="Ícone representando um usuário"/><span id="nomeUsuario">Usuário</span></Link></section> <br/>
                        <section><Link to="/application-settings"><img src={marvinIcon} alt="Ícone representando o Marvin"/>Marvin</Link></section> <br/>
                        <section><Link to="#">Ânimo - <span id="animoUsuario">Alegre</span></Link></section> <br/>
                        <section><a href="https://www.cvv.org.br/ligue-141/">Socorro</a></section> <br/>
                        <section><Link to="#">Sair</Link></section> <br/>
                        <section>
                            <p>@2020 Nimbo-Cúmulo, Inc.</p>
                            <p>Todos os direitos reservados.</p>
                        </section>
                    </div>
                </div>
            </body>
        </div>
    );
}