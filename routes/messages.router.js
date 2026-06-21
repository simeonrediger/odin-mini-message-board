import { Router } from 'express';

import { validateCreateMessage } from '../validators/messages.validation.js';
import * as messagesController from '../controllers/messages.controller.js';

const messagesRouter = Router();

messagesRouter.get('/', messagesController.getMessageBoard);
messagesRouter
  .route('/new-message')
  .get(messagesController.getCreateMessageForm)
  .post(validateCreateMessage, messagesController.createMessage);
messagesRouter.get('/message/:id', messagesController.getMessageDetails);
messagesRouter.get('/{*splat}', messagesController.getNotFound);

export default messagesRouter;
