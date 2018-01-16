import * as express from 'express';
import { Router, Request, Response } from 'express';

//controller imports
import basicController from './controllers/basic.controller';
import rssFeedController from './controllers/rss-feed.controller';

const routes: Router = express();

routes.get('/', basicController.get);
routes.get('/feeds', rssFeedController.getRssFeeds);

export default routes;