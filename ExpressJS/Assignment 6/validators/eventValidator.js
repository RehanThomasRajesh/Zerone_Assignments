
function validateObjectId(id) {
    const ObjectId = require('mongoose').Types.ObjectId;
    return ObjectId.isValid(id);
  }
  
  
  module.exports = {
    validateObjectId,
  };
  