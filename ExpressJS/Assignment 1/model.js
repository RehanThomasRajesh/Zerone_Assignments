// models.js

const mongoose = require('mongoose');

// Define Event schema
const eventSchema = new mongoose.Schema({
  Title: { type: String, required: true, maxlength: 250 },
  Details: { type: String, required: true, maxlength: 1000 },
  On: { type: Date, required: true },
  Venue: { type: String, required: true, maxlength: 100 },
  RegistrationLink: { type: String, maxlength: 250 },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = { Event };
