import {Request, Response} from 'express';
import UpdateAlbumService from './UpdateAlbum.service';

class UpdateAlbumController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id, name } = req.body;

        const updateAlbum = new UpdateAlbumService();

        const result = await updateAlbum.execute({
            id,
            name
        });

        return res.status(201).json(result);
    }
}

export default UpdateAlbumController;