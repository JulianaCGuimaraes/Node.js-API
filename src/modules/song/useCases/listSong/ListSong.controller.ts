import { Request, Response } from 'express';
import ListSongService from './ListSong.service';

class ListSongController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const listSong = new ListSongService();

        const result = await listSong.execute();

        return res.status(200).json(result);
    }
}

export default ListSongController;