const { Sequelize } = require('sequelize')

let sequelize

if (process.env.MYSQL_URL) {
  // Produção (Railway)
  sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql'
  })
} else {
  // Ambiente local
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql'
    }
  )
}
console.log('CONN FILE CARREGADO')

module.exports = sequelize