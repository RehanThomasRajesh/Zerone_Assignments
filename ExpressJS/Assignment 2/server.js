// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { createEvent, getFutureEvents, getEventById, getEventsBetweenDates, updateEvent, deleteEvent } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/events', {
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


// API endpoints

// Create a new event
app.post('/api/events', async (req, res) => {
  try {
    const savedEvent = await createEvent(req.body);
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all future events
app.get('/api/events', async (req, res) => {
  try {
    const events = await getFutureEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get details of an event with a given ID
app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a list of events between two given dates
app.get('/api/events/:startDate/:endDate', async (req, res) => {
  try {
    const events = await getEventsBetweenDates(req.params.startDate, req.params.endDate);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update details of an event with a given ID
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

// Delete an event with a given ID
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
