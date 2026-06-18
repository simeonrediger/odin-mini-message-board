import { Router } from 'express';

const indexRouter = Router();

const messages = [
  {
    author: 'Kevin',
    date: new Date(),
    text: 'Hi, there!',
  },
  {
    author: 'Jennifer',
    date: new Date(),
    text: 'Hello, world!',
  },
];

indexRouter.get('/', (req, res) => {
  res.render('pages/index', { title: 'Mini Message Board', messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('pages/form', { title: 'New Message' });
});

export default indexRouter;
