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

indexRouter.post('/new', (req, res) => {
  messages.push({ ...req.body, date: new Date() });
  res.redirect('/');
});

indexRouter.get('/{*splat}', (req, res) => {
  res.status(404).render('pages/not-found', { title: 'Page Not Found' });
});

export default indexRouter;
