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

async function addWeight(date, weight) {
  const query = `INSERT INTO weights (date, weight) VALUES (?, ?) `;

  await pool.execute(query, [date, weight]);
}

async function getWeightsAll() {
  const query = `SELECT date, weight FROM weights ORDER BY date ASC`;

  const [rows] = await pool.execute(query);
  return rows;
}

module.exports = { 
  createEvent,
  getEventsByDate,
  addWeight,
  getWeightsAll
};