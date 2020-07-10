const express = require('express');

const connection = require('./database/conection');

const routes = express.Router();

//Estrutura de import dos arquivos
// const NomeArquivo = require ('./controllers/NomeArquivo');
const SessionController = require('./controllers/SessionController');

// Estrutura de conexão para requisições
// routes.get('./rotaNavegador', NomeArquivo.funcao);
// routes.post('./rotaNavegador', NomeArquivo.funcao);

routes.get('/usuarios', async(request, response)=>{
    const usuarios = await connection('usuarios').select('*');
    return response.json(usuarios);
});

routes.post('/usuarios', async(request, response)=>{
    const { id, nome, email, senha } = request.body;

    await connection('usuarios').insert({
        id,
        nome,
        email,
        senha,
    });
});

module.exports = routes;