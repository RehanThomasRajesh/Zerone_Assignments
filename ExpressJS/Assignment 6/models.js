// models.js

const mongoose = require('mongoose');

const venueOrRegistrationLinkValidator = function () {
  return this.Venue || this.RegistrationLink;
};

const eventSchema = new mongoose.Schema({
  Title: { type: String, required: true, maxlength: 250 },
  Details: { type: String, required: true, maxlength: 1000 },
  On: { type: Date, required: true, validate: { validator: (date) => date instanceof Date } },
  Venue: { type: String, maxlength: 100, validate: [venueOrRegistrationLinkValidator, 'Either Venue or RegistrationLink is required'] },
  RegistrationLink: { type: String, maxlength: 250, validate: [venueOrRegistrationLinkValidator, 'Either Venue or RegistrationLink is required'] },
});



const Event = mongoose.model('Event', eventSchema);


// Wrap the Mongoose queries in promises

function createEvent(eventData) {
  const event = new Event(eventData);
  return event.save();
}

function getEvents() {
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
  Event,
  createEvent,
  getEvents,
  getEventById,
  getEventsBetweenDates,
  updateEvent,
  deleteEvent,
};
