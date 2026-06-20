import { Router } from 'express';

import * as messagesController from '../controllers/messages-controller.js';

const messagesRouter = Router();

messagesRouter.get('/', messagesController.getMessageBoard);
messagesRouter.get('/new', messagesController.getNewMessageForm);
messagesRouter.post('/new', messagesController.postNewMessageForm);
messagesRouter.get('/message/:messageId', messagesController.getMessageDetails);
messagesRouter.get('/{*splat}', messagesController.getNotFoundPage);

export default messagesRouter;
