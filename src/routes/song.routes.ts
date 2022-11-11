import { Router } from 'express';
import CreateSongController from '../modules/songs/useCases/createSong/CreateSong.controller';
import DeleteSongController from '../modules/songs/useCases/deleteSong/DeleteSong.controller';
import ListSongController from '../modules/songs/useCases/listSong/ListSong.controller';
import UpdateSongController from '../modules/songs/useCases/updateSong/UpdateSong.controller';

const songRoutes = Router();
const createSongController = new CreateSongController();
const listSongController = new ListSongController();
const deleteSongController = new DeleteSongController();
const updateSongController = new UpdateSongController();

songRoutes.post('/', createSongController.handle);
songRoutes.get('/', listSongController.handle);
songRoutes.delete('/:id', deleteSongController.handle);
songRoutes.put('/songName/:id', updateSongController.handle);

export default songRoutes;