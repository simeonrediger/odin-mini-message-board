import * as db from '../db/queries.js';

export async function getMessageBoard(req, res) {
  res.render('pages/message-board', {
    title: 'Mini Message Board',
    messages: await db.findMessages(),
    linkMessageDetails: true,
  });
}

export function getCreateMessageForm(req, res) {
  res.render('pages/create-message-form', { title: 'New Message' });
}

export async function createMessage(req, res) {
  const { author, content } = req.body;
  await db.insertMessage({ author, content });
  res.redirect('/');
}

export async function getMessageDetails(req, res) {
  const message = await db.getMessage(+req.params.id);

  if (!message) {
    return getNotFound(req, res);
  }

  res.render('pages/message-details', { title: 'Message Details', message });
}

export function getNotFound(req, res) {
  res.status(404).render('pages/not-found', { title: 'Page Not Found' });
}
