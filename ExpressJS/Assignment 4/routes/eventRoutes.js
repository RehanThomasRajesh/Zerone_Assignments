
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController'); 
router.post('/events', eventController.createEventController);
router.get('/events', eventController.getEventsController);
router.get('/events/:id', (req, res) => {
  if (!validateObjectId(req.params.id)) {
    return res.status(400).json({ success: false, error: 'Invalid ObjectId format' });
  }
  eventController.getEventByIdController(req, res);
});
router.get('/events/:startDate/:endDate', eventController.getEventsBetweenDatesController);
router.patch('/events/:id', eventController.updateEventController);
router.delete('/events/:id', eventController.deleteEventController);

module.exports = router;
