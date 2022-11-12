import { Request, Response } from 'express';
import ListAlbumService from './ListAlbum.service';

class ListAlbumController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const listAlbum = new ListAlbumService();

        const result = await listAlbum.execute();

        return res.status(200).json(result);
    }
}

export default ListAlbumController;