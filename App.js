const express = require('express');
const bodyParser = require('body-parser');
const clientesRoutes = require('./src/Routes/clientesRoutes');
const vendasRoutes = require('./src/Routes/vendasRoutes');
const livrosRoutes = require('./src/Routes/livrosRoutes');
const itemVendaRoutes = require('./src/Routes/itemVendaRoutes');
const sequelize = require('./src/Model/clientesModel');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use('/api/clientes', clientesRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/livros', livrosRoutes);
app.use('/api/itens', itemVendaRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado!');
}).catch(err => console.log('Erro ao sincronizar com o banco: ', err));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
