const messages = [
  {
    author: 'Kevin',
    time: new Date(),
    content: 'Hi, there!',
  },
  {
    author: 'Jennifer',
    time: new Date(),
    content: 'Hello, world!',
  },
];

import * as db from '../db/queries.js';

export async function getMessageBoard(req, res) {
  const messages = await db.getAllMessages();
  res.render('pages/message-board', { title: 'Mini Message Board', messages });
}

export function getNewMessageForm(req, res) {
  res.render('pages/new-message-form', { title: 'New Message' });
}

export function postNewMessageForm(req, res) {
  const { author, content } = req.body;
  messages.push({ author, time: new Date(), content });
  res.redirect('/');
}

export function getMessageDetails(req, res) {
  const { messageId } = req.params;
  const message = messages[messageId];

  if (!message) {
    getNotFoundPage(req, res);
    return;
  }

  res.render('pages/message-details', { title: 'Message Details', message });
}

export function getNotFoundPage(req, res) {
  res.status(404).render('pages/not-found', { title: 'Page Not Found' });
}
