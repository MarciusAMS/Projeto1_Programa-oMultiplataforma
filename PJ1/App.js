const express = require('express');
const bodyParser = require('body-parser');
const clientesRoutes = require('./Routes/clientesRoutes');
const sequelize = require('./Model/clientesModel');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', clientesRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado!');
}).catch(err => console.log('Erro ao sincronizar com o banco: ', err));

app.listen(port, () => {
    console.log(`Servidor rodando na porte ${port}`);
});