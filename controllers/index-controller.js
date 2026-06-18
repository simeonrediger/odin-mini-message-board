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
  res.render('pages/index', { title: 'Mini Message Board', messages });
}

export function getNewMessageForm(req, res) {
  res.render('pages/form', { title: 'New Message' });
}

export function postNewMessageForm(req, res) {
  messages.push({ ...req.body, date: new Date() });
  res.redirect('/');
}

export function getNotFoundPage(req, res) {
  res.status(404).render('pages/not-found', { title: 'Page Not Found' });
}
