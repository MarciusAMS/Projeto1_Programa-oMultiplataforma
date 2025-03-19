const { Sequelize, DataTypes, Model } = require('sequelize');
const Clientes = require('./clientesModel');
const sequelize = new Sequelize('localhost:3307');

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

module.exports = Vendas;