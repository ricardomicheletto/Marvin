const express = require('express');

//Estrutura de import dos arquivos
// const NomeArquivo = require ('./controllers/NomeArquivo');
const UsuariosController  = require('./controllers/UsuariosController');
const SessionController  = require('./controllers/SessionController');

const routes = express.Router();

// Estrutura de conexão para requisições
// routes.get('./rotaNavegador', NomeArquivo.funcao);
// routes.post('./rotaNavegador', NomeArquivo.funcao);

//Rota destinada a login
routes.post('/session', SessionController.create);

//Rota de pesquisa de usuarios
routes.get('/usuarios', UsuariosController.index);

//Rota de cadastro de usuarios
routes.post('/usuarios', UsuariosController.create);

//Rota de cadastro de usuarios
routes.delete('/usuarios', UsuariosController.delete);

module.exports = routes;