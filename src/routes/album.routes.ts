import { Router } from 'express';
import CreateAlbumController from '../modules/album/useCases/createAlbum/CreateAlbum.controller';
import DeleteAlbumController from '../modules/album/useCases/deleteAlbum/DeleteAlbum.controller';
import ListAlbumController from '../modules/album/useCases/listAlbum/ListAlbum.controller';
import UpdateAlbumController from '../modules/album/useCases/updateAlbum/UpdateAlbum.controller';

const albumRoutes = Router();
const createAlbumController = new CreateAlbumController();
const listAlbumController = new ListAlbumController();
const deleteAlbumController = new DeleteAlbumController();
const updateAlbumController = new UpdateAlbumController();

albumRoutes.post('/', createAlbumController.handle);
albumRoutes.get('/', listAlbumController.handle);
albumRoutes.delete('/:id', deleteAlbumController.handle);
albumRoutes.put('/albumName/:id', updateAlbumController.handle);

export default albumRoutes;