import express from 'express';
import passport from 'passport';

import { EpisodeController } from '../controllers';
import { validationMidlwr } from '../middlewares';
import createEpisodeSchema from '../schemas/create-episode.schema';

const episodesRouter = express.Router();

episodesRouter.post('/episodes', passport.authenticate('jwt', {session: false}), validationMidlwr(createEpisodeSchema), EpisodeController.create);

export default episodesRouter;
