//Arquivo destinado a login do usuario
const connection = require('../database/conection');

module.exports ={
    async create (request, response){
        const { email, senha } = request.body;

        const usuario = await connection('usuarios').where('email', email).andWhere('senha', senha).select('nome', 'email').first();

        if(!usuario){
            return response.status(400).json({ error: 'Erro ao realizar login. Por favor verifique seu e-mail e sua senha e tente novamente.'});
        }

        return response.json(usuario);
    }
};