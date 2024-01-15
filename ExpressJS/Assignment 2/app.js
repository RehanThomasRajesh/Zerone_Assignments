const express = require('express');
const bodyParser = require('body-parser');
const Event = require('./eventModel'); // Assuming eventModel.js is in the same directory

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// API endpoints
app.post('/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/events', async (req, res) => {
  try {
    const currentDate = new Date();
    const events = await Event.find({ on: { $gte: currentDate } });
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/events/:startDate/:endDate', async (req, res) => {
  try {
    const startDate = new Date(req.params.startDate);
    const endDate = new Date(req.params.endDate);
    const events = await Event.find({ on: { $gte: startDate, $lte: endDate } });
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send({ error: 'Event not found' });
    }
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

