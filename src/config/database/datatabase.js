const { Sequelize } = require('sequelize');
const { envs } = require('../enviroments/enviroments');

const sequelize = new Sequelize(envs.DB_URI, {
  logging: false
})

const authenticated = async() => {
  try {
    await sequelize.authenticate();
    console.log("La conexión se ha establecido exitosamente. 🏍️")
  } catch (error) {
    console.log(error)
  }
}

const syncUp = async() => {
  try {
    await sequelize.sync()
    console.log('La conexión se ha sincronizado correctamente. 🚀')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  authenticated,
  syncUp,
  sequelize
}