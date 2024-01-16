// middleware/loggerMiddleware.js
const winston = require('winston');

// Create a logger specifically for request logging
const requestLogger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'request.log' }),
  ],
});

function loggerMiddleware(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();

  // Log request information
  requestLogger.info(`[${timestamp}] ${method} ${url}`);

  // Continue with the next middleware in the stack
  next();
}

module.exports = loggerMiddleware;
