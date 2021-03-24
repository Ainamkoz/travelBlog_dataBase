const { Pool } = require('pg');

const pool = new Pool({
  user: 'snzkfiff',
  host: 'hattie.db.elephantsql.com',
  database: 'snzkfiff',
  password: 'U9UTQnM-86rBDBrSKBz3ZXiNSS0Q-KU7',
  port: 5432
});

module.exports = pool;