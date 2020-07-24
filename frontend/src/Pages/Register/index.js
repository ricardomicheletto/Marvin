import React, { useState } from 'react';
// import { nomeDoIcone } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles-register.css';

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome, 
            email, 
            senha,
        };

        try{
            await api.post('usuarios', data);

            alert('Cadastro efetuado com sucesso!');
            history.push('/login');
        }
        catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="registerContent">
            <body>
                <div className="login-container">
                    <section className="form">
                        <div className="navigation">
                            <button className="registerBtn"><Link to="#"> Cadastro </Link> </button>
                            <button className="loginBtn"><Link to="/login"> Login </Link> </button> 
                        </div>
                        <form onSubmit={handleRegister}>
                            <input 
                                placeholder="Nome"
                                value={nome}
                                onChange={ e => setNome(e.target.value)}
                            /> <br/>
                            <input 
                                placeholder="E-mail"
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                            /> <br/>
                            <input 
                                placeholder="Confirme seu E-mail"
                                // value={email2}
                                // onChange={ e => setEmail2(e.targetValue)}
                            /> <br/>
                            <input 
                                placeholder="Senha"
                                value={senha}
                                onChange={ e => setSenha(e.target.value)}
                            /> <br/>
                            <input 
                                placeholder="Confirme sua Senha"
                                // value={senha2}
                                // onChange={ e => setSenha2(e.targetValue)}
                            /> <br/>
                            <button type="submit">Cadastrar</button> <br/>
                        </form>
                    </section>
                </div>
            </body>
        </div>
    );
}