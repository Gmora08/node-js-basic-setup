import pino from 'pino';

import { logLevel } from '../config';

module.exports = {
  logger: pino({ level: logLevel || 'info' }),
};
