import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';

import appRoutes from './app.routes';

const app: Application = express();

app.use(bodyParser.json());
app.use('/api', appRoutes);

export default app;
