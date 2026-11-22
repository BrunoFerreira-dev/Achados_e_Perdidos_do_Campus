const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Telefone = sequelize.define('Telefone', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  CPF_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuario',
      key: 'CPF'
    }
  },
  telefone: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Telefone;