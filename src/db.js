const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
});


module.exports = dbSequelize;