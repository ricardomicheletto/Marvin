const connection = require('../database/conection');

module.exports ={
    async index (request, response){
        const { page = 1 } = request.query();

        const cards = await connection('hoobies').limit(3).offset( (page - 1) * 3).select('*');

        return response.json(cards);
    }
};