import React, { useState } from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles-login.css';

import forgotPassword from '../../assets/icons/forgot_password.svg';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();
    
    async function handleLogin(e){
        e.preventDefault();

        const data = {
            email, 
            senha,
        };

        try{
            const response = await api.post('session', data);

            localStorage.setItem('nome', response.data.nome);
            localStorage.setItem('email', response.data.email);
            history.push('/marvin');
        }
        catch(err){
            alert(err);
        }

    }

    return (
        <div className="loginContent">
            <body>
                <div className="login-container">
                    <section className="form">
                        <div className="navigation">
                            <button className="registerBtn"><Link to="/register"> Cadastro </Link> </button>
                            <button className="loginBtn"><Link to="#"> Login </Link> </button> 
                        </div>
                        <form onSubmit={handleLogin}>
                            <input 
                                placeholder="E-mail"
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            /> <br/>
                            <input 
                                placeholder="Senha"
                                value={senha}
                                onChange={ e => setSenha(e.target.value)}
                            /> <br/>
                            <button type="submit">Login</button> <br/>
                            <Link to="#"><img src={forgotPassword} alt="Ícone de cadeado com uma interrogação"/>Esqueci minha senha</Link>
                        </form>
                    </section>
                </div>
            </body>
        </div>
    );
}