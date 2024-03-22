const { Client } = require('pg');

const dbConfig = {
  user: 'dev',
  host: 'localhost',
  database: 'averiguacao',
  password: 'ABC123abc!@#',
  port: 5432,
};

const client = new Client(dbConfig);

module.exports = {
  client,
  dbConfig,
};
