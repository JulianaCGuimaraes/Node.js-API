import { Request, Response } from 'express';
import DeleteArtistService from './DeleteArtist.service';

class DeleteArtistController {
    // eslint-disable-next-line class-methods-use-this
    async handle(req: Request, res: Response){
        const { id } = req.body;

        const deleteArtist = new DeleteArtistService();

        const result = await deleteArtist.execute({ id });

        return res.status(201).json(result);
    }
}

export default DeleteArtistController;