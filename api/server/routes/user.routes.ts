import * as express from 'express';
import { Router, Request, Response } from 'express';

import usersController from '../controllers/users.controller';

const userRoutes: Router = express();

userRoutes.get('', usersController.getUsers);
userRoutes.post('/register', usersController.registerUser);

export default userRoutes;
