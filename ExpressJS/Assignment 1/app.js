const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let events = [
  { id: 1, name: 'Event 1', date: '2024-01-20', endTime: '2024-01-21T03:00:00Z' },
  { id: 2, name: 'Event 2', date: '2024-02-15', endTime: '2024-02-15T23:59:59Z' },
];

app.post('/events', (req, res) => {
  const newEvent = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

app.get('/events/not-over', (req, res) => {
  const currentDate = new Date().toISOString();
  const notOverEvents = events.filter(event => event.endTime > currentDate);
  res.json(notOverEvents);
});

app.get('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(event => event.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

app.get('/events/between-dates', (req, res) => {
  const { startDate, endDate } = req.query;
  const filteredEvents = events.filter(event => event.date >= startDate && event.date <= endDate);
  res.json(filteredEvents);
});

app.put('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const updatedEvent = req.body;

  events = events.map(event => (event.id === eventId ? { ...event, ...updatedEvent } : event));

  res.json(updatedEvent);
});

app.delete('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  events = events.filter(event => event.id !== eventId);
  res.json({ message: 'Event deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
