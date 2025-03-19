const express = require('./PJ1/node_modules/express');
const bodyParser = require('./PJ1/node_modules/body-parser');
const clientesRoutes = require('./PJ1/Routes/clientesRoutes');
const vendasRoutes = require('./PJ1/Routes/vendasRoutes');
const livrosRoutes = require('./PJ1/Routes/livrosRoutes');
const itemVendaRoutes = require('./PJ1/Routes/itemVendaRoutes');
const sequelize = require('./PJ1/Model/clientesModel');

const app = express();
const port = 3050;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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