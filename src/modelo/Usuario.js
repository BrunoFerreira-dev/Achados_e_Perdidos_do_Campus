const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
    CPF: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nasc: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hooks: {
    beforeCreate: async (Usuario) => {
      if (Usuario.senha) {
        const salt = await bcrypt.genSalt(10);
        Usuario.senha = await bcrypt.hash(Usuario.senha, salt);
      }
    },
    beforeUpdate: async (Usuario) => {
      if (Usuario.changed('senha')) {
        const salt = await bcrypt.genSalt(10);
        Usuario.senha = await bcrypt.hash(Usuario.senha, salt);
      }
    },
  }
})
Usuario.prototype.validPassword = async function(senha) {
  return await bcrypt.compare(senha, this.senha);
};
module.exports = Usuario;