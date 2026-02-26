const { Sequelize } = require('sequelize');

let sequelize;

// No Railway, a variável MYSQL_URL existirá.
// No seu PC, ela não existe, então ele cai no 'else'.
if (process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false
  });
} else {
  // Configuração para o seu PC (Guilherme)
  sequelize = new Sequelize('toughts', 'root', 'developer2026', {
    host: 'localhost',
    dialect: 'mysql',
  });
}

module.exports = sequelize;