import winston from 'winston';

const { createLogger, transports, format } = winston;

const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console()],
});

export default logger;
