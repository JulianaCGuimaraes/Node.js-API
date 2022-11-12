import {Request, Response} from 'express';
import UpdatePlaylistService from './UpdatePlaylist.service';

class UpdatePlaylistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id, name, user} = req.body;

        const updatePlaylist = new UpdatePlaylistService();

        const result = await updatePlaylist.execute({
            id,
            name, 
            user
        });

        return res.status(201).json(result);
    }
}

export default UpdatePlaylistController;