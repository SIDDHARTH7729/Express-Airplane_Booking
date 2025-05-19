// winston logger configuration
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({level,message,label,timestamp})=>{
  return `${timestamp} : [${label}] : ${level} : ${message}`;
})

// creating a logger instance
const logger = createLogger({
    format : combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combines.log'})
    ]
})

module.exports = logger;