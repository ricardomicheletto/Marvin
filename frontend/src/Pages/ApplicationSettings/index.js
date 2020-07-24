import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles-application-settings.css';

import leftArrow from '../../assets/icons/left-arrow.svg';
import userIcon from '../../assets/icons/user.svg';
import marvinIcon from '../../assets/icons/marvin.svg';

export default function ApplicationSettings(){
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <body>
                <div className="sideMenu">
                    <div className="menuContent">
                        <section><Link to="/marvin"><img src={leftArrow} alt="Seta apontando para a esquerda"/>Voltar</Link></section><br/>
                        <section><Link to="/user-settings"><img src={userIcon} alt="Ícone representando um usuário"/><span id="nomeUsuario">Usuário</span></Link></section> <br/>
                        <section><Link to="#">Meu perfil</Link></section> <br/>
                        <section><Link to="#">Configurações de conta</Link></section> <br/>
                        <section><Link to="/application-settings"><img src={marvinIcon} alt="Ícone representando o Marvin"/>Marvin</Link></section> <br/>
                        <section><Link to="#">Perfil do Marvin</Link></section> <br/>
                        <section><a href="https://www.cvv.org.br/">Socorro</a></section> <br/>
                        <section><Link to="#">Termos</Link></section> <br/>
                        <section><Link to="#">Créditos</Link></section> <br/>
                        <section><Link to="#">Politica de privacidade</Link></section> <br/>
                        <section><Link to="#" onClick={handleLogout}>Sair</Link></section> <br/>
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