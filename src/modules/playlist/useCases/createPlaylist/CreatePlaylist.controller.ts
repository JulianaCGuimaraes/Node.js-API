import {Request, Response} from 'express';
import CreatePlaylistService from './CreatePlaylist.service';

class CreatePlaylistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { name, user } = req.body;

        const createPlaylist = new CreatePlaylistService();

        const result = await createPlaylist.execute({
            name, user
        });

        return res.status(201).json(result);
    }
}

export default CreatePlaylistController;