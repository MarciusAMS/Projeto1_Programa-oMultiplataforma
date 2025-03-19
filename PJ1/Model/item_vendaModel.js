const { Sequelize, DataTypes, Model } = require('sequelize');
const Livros = require('./livrosModel');
const Vendas = require('./vendasModel');
const sequelize = new Sequelize('localhost:3307');

const ItemVenda = sequelize.define('Item_Venda', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    venda_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Vendas,
            key: 'id'
        }
    },
    livro_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Livros,
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco_unitario: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

module.exports = ItemVenda;