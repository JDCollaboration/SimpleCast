import app from './app';

app.listen(process.env.APIPORT, () => {
  console.log(`Running on port ${process.env.APIPORT}...`);
});