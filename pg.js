const { Pool } = require('pg');

const pool = new Pool({
  user: 'ecjrxcwp',
  host: 'queenie.db.elephantsql.com',
  database: 'ecjrxcwp',
  password: '0nZkfQhYX6neU44wK6Vk9CY5NkFqKBV3',
  port: 5432
});

module.exports = pool;