import { Request, Response } from 'express';
import DeletePlaylistService from './DeletePlaylist.service';

class DeletePlaylistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deletePlaylist = new DeletePlaylistService();

        const result = await deletePlaylist.execute({ id });

        return res.status(201).json(result);
    }
}

export default DeletePlaylistController;