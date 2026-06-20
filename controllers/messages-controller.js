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

export function getMessageBoard(req, res) {
  res.render('pages/messages', { title: 'Mini Message Board', messages });
}

export function getNewMessageForm(req, res) {
  res.render('pages/form', { title: 'New Message' });
}

export function postNewMessageForm(req, res) {
  messages.push({ ...req.body, date: new Date() });
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
