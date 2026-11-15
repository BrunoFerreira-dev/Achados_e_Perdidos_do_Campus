const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Local = sequelize.define('Local', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Local;