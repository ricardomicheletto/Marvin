const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //colocar o endereco que o site estara hospedado
app.use(express.json());
app.use(routes);

app.listen(3333);