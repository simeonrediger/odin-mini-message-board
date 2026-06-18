import { Router } from 'express';

import * as indexController from '../controllers/index-controller.js';

const indexRouter = Router();

indexRouter.get('/', indexController.getMessageBoard);
indexRouter.get('/new', indexController.getNewMessageForm);
indexRouter.post('/new', indexController.postNewMessageForm);
indexRouter.get('/message/:messageId', indexController.getMessageDetails);
indexRouter.get('/{*splat}', indexController.getNotFoundPage);

export default indexRouter;
