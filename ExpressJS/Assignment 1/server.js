// server.js

const express = require('express');
const bodyParser = require('body-parser');
const { createEvent, getFutureEvents, getEventById, getEventsBetweenDates, updateEvent, deleteEvent } = require('./model');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// API routes
app.post('/api/events', async (req, res) => {
  try {
    const savedEvent = await createEvent(req.body);
    res.json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await getFutureEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/events/:eventId', async (req, res) => {
  try {
    const event = await getEventById(req.params.eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/events/:startDate/:endDate', async (req, res) => {
  try {
    const events = await getEventsBetweenDates(req.params.startDate, req.params.endDate);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/events/:eventId', async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.eventId, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/events/:eventId', async (req, res) => {
  try {
    const deletedEvent = await deleteEvent(req.params.eventId);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
