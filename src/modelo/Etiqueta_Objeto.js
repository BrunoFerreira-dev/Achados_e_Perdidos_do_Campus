const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Etiqueta_objeto = sequelize.define('Etiqueta_objeto', {
  id_etiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_objeto: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
})

module.exports = Etiqueta_objeto;