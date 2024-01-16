// controllers/eventController.js

const { createEvent, getFutureEvents, getEventById, getEventsBetweenDates, updateEvent, deleteEvent } = require('../services/eventService');

const logger = require('../logger');

const { createEventService } = require('../services/eventService');

async function createEventController(req, res) {
  try {
    const savedEvent = await createEventService(req.body);
    logger.info('Event created successfully:', savedEvent);
    res.status(201).json({ success: true, data: savedEvent });
  } catch (error) {
    logger.error('Error creating event:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
}
async function createEventController(req, res) {
    try {
      const savedEvent = await createEventService(req.body);
      res.status(201).json({ success: true, data: savedEvent });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  }

  async function getEventsController(req, res) {
    try {
      const events = await getEventsService();
      res.json({ success: true, data: events });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }

async function getEventByIdController(req, res) {
  try {
    const eventId = req.params.id;
    const event = await getEventById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function getEventsBetweenDatesController(req, res) {
  try {
    const startDate = req.params.startDate;
    const endDate = req.params.endDate;
    const events = await getEventsBetweenDates(startDate, endDate);
    res.json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function updateEventController(req, res) {
  try {
    const eventId = req.params.id;
    const updatedEvent = await updateEvent(eventId, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.json({ success: true, data: updatedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function deleteEventController(req, res) {
  try {
    const eventId = req.params.id;
    const deletedEvent = await deleteEvent(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.json({ success: true, data: deletedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  createEventController,
  getEventsController,
  getEventByIdController,
  getEventsBetweenDatesController,
  updateEventController,
  deleteEventController,
};
