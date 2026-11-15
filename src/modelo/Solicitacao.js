const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Solicitacao = sequelize.define('Solicitacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  CPF_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  id_objeto: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  descricao_caracteris: {
    type: DataTypes.STRING,
    allowNull: false
  },
  responsavel_entrega: {
    type: DataTypes.STRING,
    allowNull: true
  },
  data_devoluc: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isIN: [['aprovada', 'recusada', 'analisando']]
    }
  }
})

module.exports = Solicitacao;