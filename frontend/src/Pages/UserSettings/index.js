import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { VictoryChart,VictoryScatter } from 'victory';

import api from '../../services/api';

import './styles-user-settings.css';

import leftArrow from '../../assets/icons/left-arrow.svg';
import userIcon from '../../assets/icons/user.svg';
import marvinIcon from '../../assets/icons/marvin.svg';

export default function UserSettings(){
    const email = localStorage.getItem('email');

    const history = useHistory();

    async function handleDeleteAccount(){
        try{
            await api.delete('usuarios', {email});

            alert("Sua conta e seus dados foram deletados.");
            history.push('/');
        }
        catch(err){
            alert('Erro ao deletar a conta.')
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="geral">
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
                <div className="conteudoDireita">
                    <div className="pageContent">
                        <div id="user">
                            <section className="userInfo">
                                <h3>Nome</h3>
                                <p><span id="nome">Usuario</span></p>
                            </section>
                            <section className="humor">
                                <h3>Meu humor</h3>
                                <VictoryChart domain={{ x:[0,7], y:[0,6]}}>
                                    <VictoryScatter 
                                    data={[
                                        { x: 1, y: 6 },
                                        { x: 1, y: 2 },
                                        { x: 2, y: 3 }
                                    ]}/>
                                </VictoryChart>
                            </section>
                            <section className="hobbies">
                                <h3>Meus hobies</h3>
                            </section>
                            <section className="features">
                                <h3>Minhas características</h3>
                            </section>
                        </div>
                        <div id="account">
                            <section className="userAccount">
                                <h3>Email</h3>
                                <p><span id="email">usuario@usuario.com</span></p>
                            </section>
                            <section className="password">
                                <Link>Redefinir minha senha</Link>
                            </section>
                            <section className="deleteAccount">
                                <button onClick={ handleDeleteAccount }>Deletar minha conta</button>
                            </section>
                        </div>
                    </div>
                </div>
        </div>
    );
}