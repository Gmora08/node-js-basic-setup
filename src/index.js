import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import expressPino from 'express-pino-logger';

import { logger } from './utils/logger';
import { port } from './config';
import router from './routes';

const expressLogger = expressPino({ logger });

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(expressLogger);
app.use(router);


app.listen(port, () => {
  logger.info('Server running on port %d', port)
});
