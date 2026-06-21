import { Router } from 'express';

import * as messagesController from '../controllers/messages-controller.js';

const messagesRouter = Router();

messagesRouter.get('/', messagesController.getMessageBoard);
messagesRouter
  .route('/new')
  .get(messagesController.getNewMessageForm)
  .post(messagesController.postNewMessageForm);
messagesRouter.get('/message/:id', messagesController.getMessageDetails);
messagesRouter.get('/{*splat}', messagesController.getNotFoundPage);

export default messagesRouter;
