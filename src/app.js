const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const eventRoutes = require('./routes/events');
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('서버 정상 작동');
});

app.listen(3000, () => {
  console.log('서버 실행: http://localhost:3000');
});

const pool = require('./config/db');

async function testDB() {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS reusult');
    console.log('DB 연결 성공: ', rows);
  } catch (err) {
    console.error('DB 연결 실패: ', err);
  }
}

testDB();