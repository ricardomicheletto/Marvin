import React from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles-register.css';

export default function Register(){
    return (
        <div>
            <body>
                <div className="login-container">
                    <section className="form">
                        <div className="navigation">
                            <button className="registerBtn"><Link to="#"> Cadastro </Link> </button>
                            <button className="loginBtn"><Link to="/login"> Login </Link> </button> 
                        </div>
                        <form>
                            <input placeholder="Nome"/> <br/>
                            <input placeholder="E-mail"/> <br/>
                            <input placeholder="Confirme seu E-mail"/> <br/>
                            <input placeholder="Senha"/> <br/>
                            <input placeholder="Confirme sua Senha"/> <br/>
                            <button type="submit">Cadastrar</button> <br/>
                        </form>
                    </section>
                </div>
            </body>
        </div>
    );
}