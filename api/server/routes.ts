import * as express from 'express';
import { Router, Request, Response } from 'express';

//controller imports
import basicController from './controllers/basic.controller';
import testController from './controllers/test.controller';

const routes: Router = express();

routes.get('/', basicController.get);
routes.get('/test', testController.get);

export default routes;