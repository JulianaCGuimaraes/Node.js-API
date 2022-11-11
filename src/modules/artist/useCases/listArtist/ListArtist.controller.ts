import { Request, Response } from 'express';
import ListArtistService from './ListArtist.service';

class ListArtistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const listArtist = new ListArtistService();

        const result = await listArtist.execute();

        return res.status(200).json(result);
    }
}

export default ListArtistController;