import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles-login.css';

import forgotPassword from '../../assets/icons/forgot_password.svg';

export default function Login(){
    function login(){}
    return (
        <div>
            <body>
                <div className="login-container">
                    <section className="form">
                        <div className="navigation">
                            <button className="registerBtn"><Link to="/register"> Cadastro </Link> </button>
                            <button className="loginBtn"><Link to="#"> Login </Link> </button> 
                        </div>
                        <form>
                            <input placeholder="E-mail"/> <br/>
                            <input placeholder="Senha"/> <br/>
                            <button type="submit" onClick={login}>Login</button> <br/>
                            <Link to="#"><img src={forgotPassword} alt="Ícone de cadeado com uma interrogação"/>Esqueci minha senha</Link>
                        </form>
                    </section>
                </div>
            </body>
        </div>
    );
}