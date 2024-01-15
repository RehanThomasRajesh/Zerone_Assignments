const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { createEvent, getFutureEvents, getEventById, getEventsBetweenDates, updateEvent, deleteEvent } = require('./models');
const { ObjectId } = mongoose.Types;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/events', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});

mongoose.connection.on('connecting', () => {
  console.log('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB.');
});


app.post('/api/events', async (req, res) => {
  try {
    const savedEvent = await createEvent(req.body);
    res.status(201).json(savedEvent);
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

app.get('/api/events/:id', async (req, res) => {
  try {
    const eventId = ObjectId(req.params.id);
    const event = await getEventById(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      return res.status(400).json({ error: 'Invalid ObjectId format' });
    }
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

app.patch('/api/events/:id', async (req, res) => {
  try {
    const updatedEvent = await updateEvent(req.params.id, req.body);
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    const deletedEvent = await deleteEvent(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(deletedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
