const { Sequelize, DataTypes, Model } = require('sequelize');
const Clientes = require('./clientesModel');

const sequelize = new Sequelize('Livraria', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

  sequelize.authenticate()
  .then(() => console.log('Conexão bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar:', err));

const Vendas = sequelize.define('Vendas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Clientes,
            key: 'id'
        }
    },
    data_venda: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    valor_total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

sequelize.sync()
  .then(() => console.log('Modelo sincronizado com o banco!'))
  .catch(err => console.error('Erro ao sincronizar modelo:', err));

module.exports = Vendas;