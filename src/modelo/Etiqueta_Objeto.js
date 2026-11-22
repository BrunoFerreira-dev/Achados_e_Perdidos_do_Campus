const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Etiqueta_objeto = sequelize.define('Etiqueta_objeto', {
  id_etiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Etiqueta',
      key: 'id'
    }
  },
  id_objeto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Objeto',
      key: 'id'
    }
  }
})

module.exports = Etiqueta_objeto;