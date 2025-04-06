const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('Livraria', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

  sequelize.authenticate()
  .then(() => console.log('Conexão bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar:', err));

const Livros = sequelize.define('Livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    editora: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ano_publicacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    quantidade_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

sequelize.sync()
  .then(() => console.log('Modelo sincronizado com o banco!'))
  .catch(err => console.error('Erro ao sincronizar modelo:', err));

module.exports = Livros;