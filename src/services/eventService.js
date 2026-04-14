const pool = require('../config/db');

async function createEvent(data) {
  const { date, time, type, amount, memo } = data;

  const query = `
    INSERT INTO events (date, time, type, amount, memo)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [result] = await pool.execute(query, [
    date,
    time,
    type,
    amount,
    memo,
  ]);

  return result.insertId;
}

module.exports = { createEvent };