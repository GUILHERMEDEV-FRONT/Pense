const { Sequelize } = require('sequelize');

let sequelize;

// No Railway, process.env.MYSQL_URL já existe automaticamente
// Localmente, vamos usar as variáveis do seu arquivo .env
if (process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000
    },
    dialectOptions: {
      connectTimeout: 60000
    }
  });
} else {
  // Configuração local segura usando variáveis de ambiente
  sequelize = new Sequelize(
    process.env.DB_NAME || 'toughts', 
    process.env.DB_USER || 'root', 
    process.env.DB_PASSWORD, 
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
    }
  );
}

module.exports = sequelize;