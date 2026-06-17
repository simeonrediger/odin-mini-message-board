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

export default indexRouter;
