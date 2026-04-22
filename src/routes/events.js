const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/', eventController.createEvent);
router.get('/', eventController.getEvents);

router.post('/weights', eventController.addWeight);
router.get('/weights', eventController.getWeight);

module.exports = router;