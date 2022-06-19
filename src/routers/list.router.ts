import express from 'express';
import passport from 'passport';
import { ListController } from '../controllers';
import { injectUserMidlwr, validationMidlwr } from '../middlewares';
import { changeMyListSchema } from '../schemas';

const listRouter = express.Router();

listRouter.get('/list', passport.authenticate('jwt', {session: false}), injectUserMidlwr, ListController.list);
listRouter.post('/list', passport.authenticate('jwt', {session:false}), validationMidlwr(changeMyListSchema), injectUserMidlwr, ListController.add);
listRouter.delete('/list/:showId', passport.authenticate('jwt', {session: false}), injectUserMidlwr, ListController.remove);

export default listRouter;
