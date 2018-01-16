import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';

import routes from './routes';

const app: Application = express();

app.use('/api', routes);

export default app;
