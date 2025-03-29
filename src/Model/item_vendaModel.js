const { Sequelize, DataTypes, Model } = require('sequelize');
const Livros = require('./livrosModel');
const Vendas = require('./vendasModel');

const sequelize = new Sequelize('Livraria', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

  sequelize.authenticate()
  .then(() => console.log('Conexão bem-sucedida!'))
  .catch(err => console.error('Erro ao conectar:', err));

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

sequelize.sync()
  .then(() => console.log('Modelo sincronizado com o banco!'))
  .catch(err => console.error('Erro ao sincronizar modelo:', err));

module.exports = ItemVenda;