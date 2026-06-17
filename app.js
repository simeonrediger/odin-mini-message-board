import express from 'express';

import indexRouter from './routes/index-router.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}...`);
});
