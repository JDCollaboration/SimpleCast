import * as express from 'express';
import { Router, Request, Response } from 'express';

import rssFeedController from '../controllers/rss-feed.controller';

const feedRoutes: Router = express();

feedRoutes.get('', rssFeedController.getRssFeeds);

export default feedRoutes;
