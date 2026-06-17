import { Router } from 'express';

const indexRouter = Router();

const messages = [
  {
    text: 'Hi, there!',
    user: 'Kevin',
    added: new Date(),
  },
  {
    text: 'Hello, world!',
    user: 'Jennifer',
    added: new Date(),
  },
];

export default indexRouter;
