const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Etiqueta = sequelize.define('Etiqueta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  material: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Etiqueta;