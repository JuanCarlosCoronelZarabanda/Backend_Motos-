const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database/datatabase.js')

const Repairs = sequelize.define('repairs_motos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending','completed', 'cancelled'),
    allowNull: false,
    defaultValue: 'pending'
  }
})

module.exports = Repairs