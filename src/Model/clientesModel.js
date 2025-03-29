const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('Livraria', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});


sequelize.authenticate()
  .then(() => console.log('Conexão bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar:', err));

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

sequelize.sync()
  .then(() => console.log('Modelo sincronizado com o banco!'))
  .catch(err => console.error('Erro ao sincronizar modelo:', err));

module.exports = Clientes;