import {Request, Response} from 'express';
import CreateSongService from './CreateSong.service';

class CreateSongController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { name, album, artist} = req.body;

        const createSong = new CreateSongService();

        const result = await createSong.execute({
            name,
            album,
            artist
        });

        return res.status(201).json(result);
    }
}

export default CreateSongController;