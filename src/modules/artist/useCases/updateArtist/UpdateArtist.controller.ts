import {Request, Response} from 'express';
import UpdateArtistService from './UpdateArtist.service';

class UpdateArtistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id, name, album } = req.body;

        const updateArtist = new UpdateArtistService();

        const result = await updateArtist.execute({
            id,
            name,
            album
        });

        return res.status(201).json(result);
    }
}

export default UpdateArtistController;