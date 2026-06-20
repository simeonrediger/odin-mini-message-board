import express from 'express';
import path from 'node:path';

import messagesRouter from './routes/messages-router.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.static(path.join(import.meta.dirname, 'public')));
app.use('/', messagesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.statusCode || 500)
    .send(err.message || 'Unknown error occurred');
});

app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}...`);
});
