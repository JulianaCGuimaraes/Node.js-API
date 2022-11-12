import { Request, Response } from 'express';
import DeleteAlbumService from './DeleteAlbum.service';

class DeleteAlbumController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deleteAlbum = new DeleteAlbumService();

        const result = await deleteAlbum.execute({ id });

        return res.status(201).json(result);
    }
}

export default DeleteAlbumController;