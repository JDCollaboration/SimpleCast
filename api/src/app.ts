import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

 app.get('/', (req, res) => {
   res.send('Hello World');
 });

 app.get('/api/food', (req, res) => {
   const foods: Array<string> = [
     'Pizza',
     'Hot Dogs',
     'Hamburgers',
     'French Fries',
     'Tacos'
   ];

   res.send(foods);
 });

 app.listen(3000);
 console.log('Running on port 3000...');