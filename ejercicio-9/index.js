const winston = require('winston')

const logger  = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'errors.log', level: 'error' }),
    ],
})

try {
    throw new Error("This is a custom error");
} catch (e) {
    logger.log("error", e.message)
}
