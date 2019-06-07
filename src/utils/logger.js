import pino from 'pino';

import { log_level } from '../config';

module.exports = {
  logger: pino({level: log_level || 'info'}),
}
