import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import pino from 'pino';
import expressPino from 'express-pino-logger';

import { port, log_level } from './config';

const logger = pino({level: log_level || 'info'});
const expressLogger = expressPino({ logger });

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(expressLogger);

app.get('/', (req, res) => {
  logger.debug('Calling res.send')
  res.send('Hello World')
})

app.listen(port, () => {
  logger.info('Server running on port %d', port)
});
