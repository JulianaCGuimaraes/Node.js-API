import { Router } from 'express';
import songRoutes from './song.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/songs', songRoutes);

export default routes;