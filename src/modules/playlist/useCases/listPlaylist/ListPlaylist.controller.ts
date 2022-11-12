import { Request, Response } from 'express';
import ListPlaylistService from './ListPlaylist.service';

class ListPlaylistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const listPlaylist = new ListPlaylistService();

        const result = await listPlaylist.execute();

        return res.status(200).json(result);
    }
}

export default ListPlaylistController;