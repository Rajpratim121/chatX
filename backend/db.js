import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'ADMIN',
  database: 'GIGGLE',
  port: 5432,
});

module.exports = pool;
