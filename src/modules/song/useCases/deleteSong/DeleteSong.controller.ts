import { Request, Response } from 'express';
import DeleteSongService from './DeleteSong.service';

class DeleteSongController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deleteSong = new DeleteSongService();

        const result = await deleteSong.execute({ id });

        return res.status(201).json(result);
    }
}

export default DeleteSongController;