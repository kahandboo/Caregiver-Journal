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

async function getEvents(req, res) {
  try {
    const {date} = req.query;
    
    if (!date) {
      return res.status(400).json({message: 'date 필요'});
    }

    const events = await eventService.getEventsByDate(date);

    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '에러 발생' });
  }
}

async function addWeight(req, res) {
  try {
    const {date, weight} = req.body;

    await eventService.addWeight(date, weight);
    res.json({success: true});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '에러 발생' });
  }
}

async function getWeight(req, res) {
  try {
    const rows = await eventService.getWeightsAll();

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '에러 발생' });
  }
}

module.exports = { 
  createEvent,
  getEvents,
  addWeight,
  getWeight
};