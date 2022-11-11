import {Request, Response} from 'express';
import UpdateSongService from './UpdateSong.service';


class UpdateSongController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id, name, album, artist } = req.body;

        const updateSong = new UpdateSongService();

        const result = await updateSong.execute({
            id,
            name, 
            album,
            artist
        });

        return res.status(201).json(result);
    }
}

export default UpdateSongController;