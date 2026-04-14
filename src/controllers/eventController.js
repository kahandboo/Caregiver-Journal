const eventService = require('../services/eventService');

async function createEvent(req, res) {
  try {
    const id = await eventService.createEvent(req.body);
    res.json({ message: '저장 성공', id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '서버 오류' });
  }
}

module.exports = { createEvent };