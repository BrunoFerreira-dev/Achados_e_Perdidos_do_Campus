const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Objeto = sequelize.define('Objeto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_encontrado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_local: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Local',
      key: 'id'
    }
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Categoria',
      key: 'id'
    }
  }
})

module.exports = Objeto;