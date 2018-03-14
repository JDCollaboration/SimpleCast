import * as express from 'express';
import { Router, Request, Response } from 'express';

//controller imports
import basicController from './controllers/basic.controller';

import userRoutes from './routes/user.routes';
import feedRoutes from './routes/feed.routes';

const appRoutes: Router = express();

appRoutes.get('/', basicController.get);
appRoutes.use('/feeds', feedRoutes);
appRoutes.use('/users', userRoutes);

export default appRoutes;
