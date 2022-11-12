import { Router } from 'express';
import albumRoutes from './album.routes';
import artistRoutes from './artist.routes';
import playlistRoutes from './playlist.routes';
import songRoutes from './song.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/songs', songRoutes);
routes.use('/artists', artistRoutes);
routes.use('/albums', albumRoutes);
routes.use('/playlists', playlistRoutes);

export default routes;