// services/eventService.js

const { Event, createEvent, getEvents, getEventById, getEventsBetweenDates, updateEvent, deleteEvent } = require('../models');

async function createEventService(eventData) {
  return createEvent(eventData);
}

async function getEventsService() {
    const currentDate = new Date();
    return Event.find({ On: { $gte: currentDate } }).exec();
  }

async function getEventByIdService(eventId) {
  return getEventById(eventId);
}

async function getEventsBetweenDatesService(startDate, endDate) {
  return getEventsBetweenDates(startDate, endDate);
}

async function updateEventService(eventId, updatedData) {
  return updateEvent(eventId, updatedData);
}

async function deleteEventService(eventId) {
  return deleteEvent(eventId);
}

module.exports = {
  createEventService,
  getEventsService,
  getEventByIdService,
  getEventsBetweenDatesService,
  updateEventService,
  deleteEventService,
};
