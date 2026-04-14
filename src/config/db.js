const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '비밀번호',
  database: 'cat_care',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;