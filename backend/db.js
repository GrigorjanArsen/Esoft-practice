require('dotenv').config();
const knex = require('knex');

const pool = knex({
  client: 'pg',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    database: process.env.DB_NAME,
  },
  pool: {
    min: process.env.DB_MIN ? parseInt(process.env.DB_MIN) : 2,
    max: process.env.DB_MAX ? parseInt(process.env.DB_MAX) : 10,
    idleTimeoutMillis: process.env.DB_TIMEOUTMILLIS
      ? parseInt(process.env.DB_TIMEOUTMILLIS)
      : 30000, // значение по умолчанию
  },
});

module.exports = { pool };
