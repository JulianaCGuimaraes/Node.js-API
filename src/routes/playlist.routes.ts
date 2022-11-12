import { Router } from 'express';
import CreatePlaylistController from '../modules/playlist/useCases/createPlaylist/CreatePlaylist.controller';
import DeletePlaylistController from '../modules/playlist/useCases/deletePlaylist/DeletePlaylist.controller';
import ListPlaylistController from '../modules/playlist/useCases/listPlaylist/ListPlaylist.controller';
import UpdatePlaylistController from '../modules/playlist/useCases/updatePlaylist/UpdatePlaylist.controller';

const playlistRoutes = Router();
const createPlaylistController = new CreatePlaylistController();
const listPlaylistController = new ListPlaylistController();
const deletePlaylistController = new DeletePlaylistController();
const updatePlaylistController = new UpdatePlaylistController();

playlistRoutes.post('/', createPlaylistController.handle);
playlistRoutes.get('/', listPlaylistController.handle);
playlistRoutes.delete('/:id', deletePlaylistController.handle);
playlistRoutes.put('/playlistName/:id', updatePlaylistController.handle);

export default playlistRoutes;