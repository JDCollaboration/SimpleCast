const express = require('express');
const app = express();
const bodyParser = require('body-parser');

 app.get('/', (req, res) => {
   res.send('Hello World!');
 });

 app.get('/api/food', (req, res) => {
   const food = [
     'Pizza',
     'Hot Dogs',
     'Hamburgers',
     'French Fries'
   ];

   res.send(food);
 });

 app.listen(3000);
 console.log('Running on port 3000...');