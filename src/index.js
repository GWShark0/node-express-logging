import winston from 'winston';
import expressWinston from 'express-winston';
import yn from 'yn';

const LOG_COLORS = yn(process.env.LOG_COLORS);
const LOG_JSON = yn(process.env.LOG_JSON);
const LOG_LEVEL = yn(process.env.LOG_LEVEL);
const LOG_META = yn(process.env.LOG_META);

export const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: LOG_COLORS,
      json: LOG_JSON,
      level: LOG_LEVEL,
      stringify: true,
    }),
  ],
});

expressWinston.requestWhitelist.push('body');
expressWinston.responseWhitelist.push('body');

export const loggerMiddleware = expressWinston.logger({
  colorize: LOG_COLORS,
  expressFormat: true,
  meta: LOG_META,
  statusLevels: true,
  winstonInstance: logger,
});
