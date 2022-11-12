import { Router } from 'express';
import CreateArtistController from '../modules/artist/useCases/createArtist/CreateArtist.controller';
import DeleteArtistController from '../modules/artist/useCases/deleteArtist/DeleteArtist.controller';
import ListArtistController from '../modules/artist/useCases/listArtist/ListArtist.controller';
import UpdateArtistController from '../modules/artist/useCases/updateArtist/UpdateArtist.controller';

const artistRoutes = Router();
const createArtistController = new CreateArtistController();
const listArtistController = new ListArtistController();
const deleteArtistController = new DeleteArtistController();
const updateArtistController = new UpdateArtistController();

artistRoutes.post('/', createArtistController.handle);
artistRoutes.get('/', listArtistController.handle);
artistRoutes.delete('/:id', deleteArtistController.handle);
artistRoutes.put('/artistName/:id', updateArtistController.handle);

export default artistRoutes;