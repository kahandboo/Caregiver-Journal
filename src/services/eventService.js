const pool = require('../config/db');

async function createEvent(data) {
  const { date, time, type, amount, memo, sub_type } = data;

  const query = `
    INSERT INTO events (date, time, type, amount, memo, sub_type)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const [result] = await pool.execute(query, [
    date,
    time,
    type,
    amount,
    memo,
    sub_type
  ]);

  console.log(req.body);

  return result.insertId;
}

async function getEventsByDate(date) {
  const query = `
    SELECT *
    FROM events
    WHERE date = ?
    ORDER BY time ASC
  `;

  const [rows] = await pool.execute(query, [date]);
  return rows;
}

module.exports = { 
  createEvent,
  getEventsByDate
};