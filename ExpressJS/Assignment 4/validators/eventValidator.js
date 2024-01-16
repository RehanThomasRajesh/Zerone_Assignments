// validators/eventValidator.js

function validateObjectId(id) {
    const ObjectId = require('mongoose').Types.ObjectId;
    return ObjectId.isValid(id);
  }
  
  // Other validation functions...
  
  module.exports = {
    validateObjectId,
    // Export other validation functions if you have them...
  };
  