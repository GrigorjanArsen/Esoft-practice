const Knex = require('knex');
require('dotenv').config();
const config = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'postgres',
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'jewellery',
    },
    pool: {
      min: Number(process.env.DB_MIN) || 2,
      max: Number(process.env.DB_MAX) || 50,
      idleTimeoutMillis: Number(process.env.DB_TIMEOUTMILLIS) || 20000,
    },
    migrations: {
      directory: './migrations',
      tableName: 'migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

module.exports = config;