const connection = require('../database/conection');

module.exports ={
    async index (request, response){
        const usuarios = await connection('usuarios').select('*');
        return response.json(usuarios);
    },

    async create (request, response){
        const { nome, email, senha } = request.body;

        await connection('usuarios').insert({
            nome,
            email,
            senha,
        });
        
        return response.status(201).send();
    },

    async delete (request, response){
        const { email } = request.body;

        const usuario = await connection('usuarios').where('email', email).select('email').first();

        if(usuario.email != email){
            return response.status(401).json({ error: 'Operação não permitida.'});
        }

        await connection('usuarios').where('email', email).del();

        return response.status(204).send();
    }
};