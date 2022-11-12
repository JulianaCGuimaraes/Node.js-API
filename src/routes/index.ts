import { Router } from 'express';
import artistRoutes from './artist.routes';
import songRoutes from './song.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/songs', songRoutes);
routes.use('/artists', artistRoutes);

export default routes;