
const app="app"
const pass="AppPass"
const { Pool } = require('pg');

const db = new Pool({
  user: app,
  host: 'localhost',
  database: 'books',
  password: pass,
  port: 5432,
});

export default db