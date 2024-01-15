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

// Wrap the Mongoose queries in promises

function createEvent(eventData) {
  const event = new Event(eventData);
  return event.save();
}

function getFutureEvents() {
  const currentDate = new Date();
  return Event.find({ On: { $gte: currentDate } }).exec();
}

function getEventById(eventId) {
  return Event.findById(eventId).exec();
}

function getEventsBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Event.find({ On: { $gte: start, $lte: end } }).exec();
}

function updateEvent(eventId, updatedData) {
  return Event.findByIdAndUpdate(eventId, updatedData, { new: true }).exec();
}

function deleteEvent(eventId) {
  return Event.findByIdAndDelete(eventId).exec();
}

module.exports = {
  createEvent,
  getFutureEvents,
  getEventById,
  getEventsBetweenDates,
  updateEvent,
  deleteEvent,
};
