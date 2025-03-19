const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('localhost:3307');

const Clientes = sequelize.define('Clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: true,      
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
});

module.exports = Clientes;