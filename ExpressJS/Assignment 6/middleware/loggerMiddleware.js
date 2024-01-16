const winston = require('winston');

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

  requestLogger.info(`[${timestamp}] ${method} ${url}`);

  next();
}

module.exports = loggerMiddleware;
