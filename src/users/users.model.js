const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database/datatabase.js')

const Users = sequelize.define('users_motos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('avaible','unavaible', "disabled"),
    allowNull: false,
    defaultValue: 'avaible'
  }
})

module.exports = Users