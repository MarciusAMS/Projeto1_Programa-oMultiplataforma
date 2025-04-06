const express = require('express');
const bodyParser = require('body-parser');
const clientesRoutes = require('./Routes/clientesRoutes');
const vendasRoutes = require('./Routes/vendasRoutes');
const livrosRoutes = require('./Routes/livrosRoutes');
const itemVendaRoutes = require('./Routes/itemVendaRoutes');
const menuRoutes = require('./Routes/menuRoutes');
const sequelize = require('./Model/clientesModel');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/api/clientes', clientesRoutes);
app.use('/api/vendas', vendasRoutes);
app.use('/api/livros', livrosRoutes);
app.use('/api/itens', itemVendaRoutes);
app.use('/api/menu', menuRoutes);

sequelize.sync().then(() => {
    console.log('Banco de dados sincronizado!');
}).catch(err => console.log('Erro ao sincronizar com o banco: ', err));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
